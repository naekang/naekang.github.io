## Tenant, Cell Provisioning 환경 구성
- SvelteKit을 활용한 팀 내 어드민 페이지 구축
- AWS Step function을 이용한 Tenant Provisioning 프로세스 구축
- Bitbuckt pipeline & Terraform을 활용하여 Cell Provisioning 프로세스 구축
<br/>

## Terraform을 활용한 Global Architecture IaC 구축
- AWS Resource 모듈 및 사내 환경에 맞는 모듈 구성
  - 프로젝트 구조화 및 모듈화를 통한 재사용성 향상
- 구성한 모듈을 활용하여 Tenant tier, 환경에 맞는 Cell type 생성
<br/>

## App of Apps 패턴을 활용한 통합 ArgoCD 구축
- Multi cluster 환경에서 통합 관리를 위한 통합 ArgoCD 구축
- Transit gateway를 활용하여 EKS 클러스터 간 통신 확보
<br/>

## PCI-DSS, ISMS-P 인증을 위한 보안 강화
- Cross account, Multi region 환경에서 Transit gateway를 활용하여 통신하도록 함으로써 PCI-DSS 요건 충족
- NACL, Security Group 등을 활용한 보안 강화