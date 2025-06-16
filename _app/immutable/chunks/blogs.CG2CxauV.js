import{A as e}from"./assets.CNSfAoUr.js";import{a as n}from"./skills.B6cN3hnv.js";const r=`# Karpenter

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
\`\`\``,s=`# Kubecost

---

## Kubecost 도입
EKS Add-on으로 설치하고 싶었으나 EKS 1.32의 경우 Add-on 미지원으로 인해 helm으로 설치하였다.
<br>
현재는 지원하는걸로 알고있다.
<br>
<br>

## 참고자료
[AWS 공식문서](https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/cost-monitoring-kubecost.html#kubecost-helm)
<br>
<br>

## Kubecost 설치
PV의 경우 EBS, EFS 둘 다 가능하나 현재 노드가 MultiAZ로 구성되어 있어 EFS로 선택하였다.
<br>
<br>

#### 1. EKS module 내에 efs-csi-driver addon 추가

\`\`\`yaml
aws-efs-csi-driver = {
  addon_version = "v2.1.7-eksbuild.1"
}
\`\`\`

<br>

#### 2. EFS생성, PV 및 PVC 생성

\`\`\`hcl
resource "aws_efs_file_system" "shared_storage" {
  creation_token = "\${var.name}-efs"
  encrypted      = true
  kms_key_id     = var.kms_key_id
}

resource "aws_efs_mount_target" "shared_storage" {
  for_each       = toset(var.subnet_ids)
  file_system_id = aws_efs_file_system.shared_storage.id
  subnet_id      = each.value
}

resource "kubernetes_persistent_volume" "shared_storage" {
  metadata {
    name = "\${var.name}-pv"
  }

  spec {
    capacity = {
      storage = "20Gi"
    }

    volume_mode  = "Filesystem"
    access_modes = ["ReadWriteMany"]

    persistent_volume_reclaim_policy = "Retain"

    storage_class_name = "efs-sc"

    persistent_volume_source {
      csi {
        driver        = "efs.csi.aws.com"
        volume_handle = aws_efs_file_system.shared_storage.id
        fs_type       = "ext4"
      }
    }
  }
}

resource "kubernetes_persistent_volume_claim" "shared_storage" {
  metadata {
    name      = "kubecost-cost-analyzer"
    namespace = "kubecost"
  }

  spec {
    access_modes = ["ReadWriteMany"]

    resources {
      requests = {
        storage = "20Gi"
      }
    }

    volume_name        = kubernetes_persistent_volume.shared_storage.metadata[0].name
    storage_class_name = "efs-sc"
  }
}

resource "kubernetes_storage_class" "efs_sc" {
  metadata {
    name = "efs-sc"
    annotations = {
      "storageclass.kubernetes.io/is-default-class" = "true"
    }
  }

  storage_provisioner = "efs.csi.aws.com"
  reclaim_policy      = "Retain"

  parameters = {
    type      = "gp3"
    encrypted = "true"
  }
} 
\`\`\`

<br>
<br>

#### 3. helm을 통해 kubecost 설치
위에서 PV 구성 완료하였으므로 자동생성 옵션 제거

\`\`\`bash
helm upgrade -i kubecost oci://public.ecr.aws/kubecost/cost-analyzer --version 2.7.0 \\
    --namespace kubecost --create-namespace \\
    --set persistentVolume.enabled=false \\
    --set prometheus.server.persistentVolume.enabled=false \\
    -f https://raw.githubusercontent.com/kubecost/cost-analyzer-helm-chart/develop/cost-analyzer/values-eks-cost-monitoring.yaml
\`\`\`

<br>
<br>

#### 4. 포트포워딩하여 접속

\`\`\`bash
kubectl port-forward --namespace kubecost deployment/kubecost-cost-analyzer 9090
\`\`\``,a=[{slug:"karpenter",color:"#ff3e00",description:r,shortDescription:"Karpenter 전환",links:[],logo:e.AWS,name:"Karpenter 전환",period:{from:new Date(2025,6,15),to:new Date(2025,6,15)},skills:n("terraform","aws"),type:"Infra",screenshots:[]},{slug:"kubecost",color:"#ff3e00",description:s,shortDescription:"Kubecost 설치하기",links:[],logo:e.AWS,name:"Kubecost 설치하기",period:{from:new Date(2025,6,16),to:new Date(2025,6,16)},skills:n("terraform","aws"),type:"Infra",screenshots:[]}],t="Blogs",c={title:t,items:a};export{c as B};
