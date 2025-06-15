import{A as e}from"./assets.BINmQUO_.js";import{a as n}from"./skills.CSOl5ri5.js";const r=`# Karpenter

---

## Karpenter 도입 계기
우리 서비스(여행업계) 특성 상 직장인들이 퇴근한 시간대인 21-23시인 시간대에 트래픽이 급증하는 케이스들이 많다.
<br>
또한, 다른 여러 플랫폼들에도 운임을 제공하고 있으며 해당 플랫폼들이 캐싱을 위해 우리의 서비스를 한번에 많이 조회해가는 경우들이 존재한다.
<br>
이러한 상황에서 반복적으로 다음과 같은 문제들이 발생하는 상황이었다.
- hpa limit 도달 -> **Cluster Autoscaler**가 동작 -> 노드가 뜨는동안 서버 처리 속도 지연으로 lb health check 지연 -> pod가 unhealthy 상태로 빠지면서 트래픽을 못받아 503 에러 발생
<br>
이런 장애들을 몇번 겪으면서 이를 해결하기 위한 다양한 해결책들을 준비했는데 이번에는 그중에서도 비용절감과 노드 프로비저닝 속도 향상을 위한 karpenter로의 전환에 대해 이야기해보려 한다.
<br>
<br>

## Cluster Autoscaler와 Karpenter 비교
### Cluster Autoscaler
참고: [Amazon EKS-Cluster Autoscaler](https://docs.aws.amazon.com/ko_kr/eks/latest/best-practices/cas.html)

![Autoscaler Architecture](/blogs/karpenter/karpenter-ca-arch.png)
<br>
**Cluster Autoscaler**는 기본적으로 **AWS Auto Scaling Group**(이하 ASG)를 기반으로 동작한다.
<br>
HPA가 한계점까지 도달해 Pending 상태의 Pod를 CA가 감지하면 ASG를 호출하여 사전에 설정한 MAX 값을 넘지 않는 범위 내에서 노드 수를 늘리게된다.
<br>
이러한 과정 속에서 ASG를 거쳐야 하기에 노드 프로비저닝 시간이 약 1분 정도로 상대적으로 느리다. 
<br>
또한, 비용 절감을 위해 Spot 인스턴스를 적절히 섞어서 사용하고 싶었으나 CA는 정해진 인스턴스 타입으로만 Scale out이 가능하다.

### Cluster Autoscaler
참고: [Amazon EKS-Cluster Karpenter](https://docs.aws.amazon.com/ko_kr/eks/latest/best-practices/karpenter.html)

![Autoscaler Architecture](/blogs/karpenter/karpenter-ca-arch.png)
<br>
반면, **Karpenter**는 별도로 정의한 Provisioner가 노드를 직접 생성하고 관리한다.
<br>
ASG를 거치지 않기에 CA보다 상대적으로 Scale out 속도가 빠르며 (약 35초) 원하는 인스턴스 타입을 여러개 지정하여 비용 최적화한 노드를 프로비저닝할 수 있다.

## Karpenter 적용 과정
참고: [Getting Started with Karpenter](https://karpenter.sh/docs/getting-started/getting-started-with-karpenter/)

### Subnet, Security Group에 Tag 추가
Karpenter controller가 노드를 띄울 때 필요한 데이터 수집을 위해 사용하는 Subnet과 Security group에 Tag 추가가 필요하다.
- key: \`karpenter.sh/discovert\`
- value: \`{cluster name}\`

### karpenter controller, NodePool, NodeClass 설치
내부적으로 Terraform을 사용하고 있어 Terraform 코드로 작성해보았다.

\`\`\`yaml
locals {
  eks_name              = var.eks_name
  cluster_endpoint      = var.cluster_endpoint
  irsa_role_name        = var.irsa_role_name
  instance_profile_name = var.instance_profile_name
  queue_name            = var.queue_name
}

resource "helm_release" "karpenter" {
  name = "karpenter"

  repository       = "oci://public.ecr.aws/karpenter"
  create_namespace = true
  namespace        = "karpenter"
  chart            = "karpenter"
  version          = "1.3.3"
  upgrade_install  = true

  set {
    name  = "settings.clusterName"
    value = local.eks_name
  }

  set {
    name  = "settings.interruptionQueueName"
    value = local.queue_name
  }
}

resource "kubernetes_manifest" "karpenter_provisioner" {
  manifest = {
    apiVersion = "karpenter.sh/v1"
    kind       = "NodePool"
    metadata = {
      name = "karpenter-node-pool"
    }
    spec = {
      template = {
        spec = {
          nodeClassRef = {
            group = "karpenter.k8s.aws"
            kind  = "EC2NodeClass"
            name  = "karpenter-node-template"
          }
          requirements = [
            {
              key      = "karpenter.sh/capacity-type"
              operator = "In"
              values   = ["spot", "on-demand"]
            },
            {
              key      = "node.kubernetes.io/instance-type"
              operator = "In"
              values   = ["m7i-flex.2xlarge", "m7i.2xlarge", "m5.2xlarge", "m5a.2xlarge", "m5ad.2xlarge", "m5n.2xlarge"]
            },
            {
              key      = "topology.kubernetes.io/zone"
              operator = "In"
              values   = ["ap-northeast-2a", "ap-northeast-2c"]
            }
          ]
          expireAfter = "60m"
        }
      }
      limits = {
        cpu    = "1000"
        memory = "1000Gi"
      }
    }
  }

  depends_on = [
    helm_release.karpenter
  ]
}

resource "kubernetes_manifest" "karpenter_node_template" {
  manifest = {
    apiVersion = "karpenter.k8s.aws/v1"
    kind       = "EC2NodeClass"
    metadata = {
      name = "karpenter-node-template"
    }
    spec = {
      role = local.irsa_role_name
      amiSelectorTerms = [
        {
          alias = "al2023@v20250403"
        }
      ]
      subnetSelectorTerms = [
        {
          tags = {
            "karpenter.sh/discovery" = local.eks_name
          }
        }
      ]
      securityGroupSelectorTerms = [
        {
          tags = {
            "karpenter.sh/discovery" = local.eks_name
          }
        }
      ]
      instanceProfile = local.instance_profile_name
      blockDeviceMappings = [
        {
          deviceName = "/dev/xvda"
          ebs = {
            volumeSize = "1000Gi"
            volumeType = "gp3"
            iops       = 3000
          }
        }
      ]
      tags = {
        "karpenter.sh/discovery" = local.eks_name
      }
    }
  }

  depends_on = [
    helm_release.karpenter
  ]
}
\`\`\``,a=[{slug:"karpenter",color:"#ff3e00",description:r,shortDescription:"Karpenter 전환",links:[],logo:e.AWS,name:"Karpenter 전환",period:{from:new Date(2023,2,2),to:new Date(2024,2,1)},skills:n("terraform","aws"),type:"Infra",screenshots:[]}],t="Blogs",l={title:t,items:a};export{l as B};
