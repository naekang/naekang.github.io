## 고객사·인프라 환경 생성 자동화
- SvelteKit으로 팀 내 어드민 페이지 구축
- AWS Step Functions로 고객사 환경 생성(HMAC 키, 도메인, DB 설정)을 자동화하고, 코드 보완과 전 과정 검증 수행
- Bitbucket Pipelines, AWS CodeBuild, CodePipeline으로 환경 유형별 tfvars 생성과 인프라 프로비저닝을 자동화
<br/>

## Terraform을 활용한 멀티 계정 인프라 IaC 구축
- 기존 ECS 환경을 EKS 환경으로 전환
- Terraform으로 개발·검증·운영 3개 환경을 다시 프로비저닝하고 WAF·Transit Gateway·HPA 구성을 코드화해 **환경별 설정을 코드로 재현·변경할 수 있도록 구성**
- Transit Gateway와 계정 간 리소스 공유(AWS RAM)를 Terraform으로 구성해 **서로 다른 AWS 계정의 클러스터 간 사설 통신 경로를 코드로 관리**
<br/>

## App of Apps 패턴을 활용한 통합 ArgoCD 구축
- ArgoCD App of Apps로 3개 클러스터의 애플리케이션 배포 구성을 통합해 **배포 상태를 한 곳에서 조회·관리**
<br/>

## 운영 EKS Graviton(ARM) 전환
- 운영 클러스터 3개를 ALB 트래픽 가중치 50:50 → 100 단계 방식으로 ARM 인스턴스에 전환해 **전환 대상 인스턴스의 시간당 단가를 약 15% 낮춤**
- 기존 Bitbucket Pipelines의 멀티 아키텍처 빌드 제약을 amd64·arm64 병렬 단계로 해결해 **두 아키텍처 이미지를 하나의 파이프라인에서 생성**
<br/>

## ISO27001·PCI-DSS·ISMS-P 인증 요건 대응
- 운영 서비스 3곳의 네트워크에 PCI-DSS 4.0 기준 접근 제어(NACL)를 적용하고 Security Hub·CIS 점검 항목을 조치해 **운영 환경의 보안 설정을 보완**
- AWS Resilience Hub로 인프라 복원력을 평가하고 **RTO 2시간·RPO 10분의 복구 목표를 제안**
<br/>

## LGTM 관측성 플랫폼 구축
- Tempo 구축을 담당하고 Loki·Grafana·Mimir 공동 구축에 참여해 **로그·메트릭·트레이스를 Grafana에서 조회하는 관측성 환경 마련**
- AWS 주요 서비스의 CloudWatch 메트릭을 Mimir로 수집하고 **Grafana 대시보드 9종을 구성해 운영 지표 조회를 통합**
