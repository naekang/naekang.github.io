import{A as e}from"./assets.B9F-e_Wf.js";import{a as n}from"./skills.RLBTmV1M.js";const s=`# Karpenter

---

블로그 이관: [또치의 개발 블로그](https://ddochi.kr/post/karpenter/)`,t=`# Kubecost

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
\`\`\``,r=[{slug:"karpenter",color:"#ff3e00",description:s,shortDescription:"Karpenter 전환",links:[],logo:e.AWS,name:"Karpenter 전환",period:{from:new Date(2025,6,15),to:new Date(2025,6,15)},skills:n("terraform","aws"),type:"Infra",screenshots:[]},{slug:"kubecost",color:"#ff3e00",description:t,shortDescription:"Kubecost 설치하기",links:[],logo:e.AWS,name:"Kubecost 설치하기",period:{from:new Date(2025,6,16),to:new Date(2025,6,16)},skills:n("terraform","aws"),type:"Infra",screenshots:[]}],a="Blogs",i={title:a,items:r};export{i as B};
