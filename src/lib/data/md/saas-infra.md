## Tenant, Cell Provisioning 환경 구성
- SvelteKit을 활용한 팀 내 어드민 페이지 구축
- Tenant Provisioning
  - AWS Step function을 이용하여 hmac key, domain, DB 세팅 자동화
- Cell Provisioning
  - Bitbucket pipeline, AWS CodeBuild, CodePipeline을 활용하여 Cell type에 맞는 tfvars 생성 및 Provisioning 자동화
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

## 주요 보안 인증(PCI-DSS 4.0, ISO27001) 요건 충족을 위한 아키텍처 개선 주도
- AWS Resilience Hub 기반의 인프라 복원력 테스트 및 네트워크 경계 보안(Transit Gateway, NACL 등) 강화를 통해 성공적인 인증 획득에 기여

<br/>

## LGTM 스택 기반의 중앙화된 옵저버빌리티 플랫폼 구축
-  Loki, Grafana, Tempo, Mimir를 활용하여 로그, 메트릭, 트레이스를 통합, 분산 시스템의 가시성을 확보하고 선제적 장애 대응 체계 마련