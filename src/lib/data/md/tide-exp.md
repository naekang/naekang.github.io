## NDC Aggregator Platform 운영 및 고도화
- Java 1.8 + SpringBoot 2.x -> Java 21 + SpringBoot 3.x 전환 및 어플리케이션 최적화
  - CPU, Memory 사용량 약 30% 감소, 인프라 비용 약 10% 절감
- Svelte를 활용한 사내 테스트 페이지 운영 및 고도화
  - 팀 QA 효율성 증대
- 팀내 업무 효율성 증대를 위한 업무 자동화
  - AWS Lambda + Opensearch를 활용하여 항공사 장애 발생 감지 자동화
<br/>

## AWS DMS를 활용한 DB Migration
- Tenant isolation 및 Row-level security를 위해 MySQL → PostgreSQL 전환
  - Row-level security 적용을 통해 Multi-tenant 환경 구현 및 보안 강화
- 무중단 SaaS 플랫폼 전환을 위해 AWS DMS를 활용한 Migration 진행
  - AWS Aurora MySQL -> AWS Aurora PostgreSQL 이종간 Migration
  - AWS DocumentDB Migration
  - 기존 Tenant의 무중단 SaaS 전환

## NDC Aggregator Platform SaaS 전환 with AWS Proserve

### Monolithic Architecture → Cell-based Architecture로의 전환
- XML 데이터 Aggregation 및 Converting Cell / 항공사 호출 Cell / DB 접근 Cell 로 분리
- 여행사와 항공사 간의 데이터 처리 효율성 증대
- Tenant 증가에 따른 확장성 확보
<br/>

### Terraform을 활용한 Global Architecture IaC 구축
- 기존 ECS 환경에서 EKS 환경으로 전환
- Transit gateway 및 AWS VPC Private Link를 활용하여 Multi-region간 통신 환경 구성
- AWS Resource 모듈 및 사내 환경에 맞는 모듈 구성
<br/>

### Tenant, Cell Provisioning 환경 구성
- SvelteKit을 활용한 팀 내 어드민 페이지 구축
- AWS Step function을 이용한 Tenant Provisioning 프로세스 구축
- Bitbuckt pipeline & Terraform을 활용하여 Cell Provisioning 프로세스 구축
<br/>

### App of Apps 패턴을 활용한 통합 ArgoCD 구축
- Multi cluster 환경에서 통합 관리를 위한 통합 ArgoCD 구축
- Transit gateway를 활용하여 EKS 클러스터 간 통신 확보
<br/>

### PCI-DSS, ISMS-P 인증을 위한 보안 강화
- Cross account, Multi region 환경에서 Transit gateway를 활용하여 통신하도록 함으로써 PCI-DSS 요건 충족
- NACL, Security Group 등을 활용한 보안 강화