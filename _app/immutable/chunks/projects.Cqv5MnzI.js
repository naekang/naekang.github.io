import{A as e}from"./assets.DVrScp78.js";import{a as n}from"./skills.DIzubs77.js";const a=`## AWS DMS를 활용한 DB Migration
- Tenant isolation 및 Row-level security를 위해 MySQL → PostgreSQL 전환
  - Row-level security 적용을 통해 Multi-tenant 환경 구현 및 보안 강화
- 무중단 SaaS 플랫폼 전환을 위해 AWS DMS를 활용한 Migration 진행
  - AWS Aurora MySQL -> AWS Aurora PostgreSQL 이종간 Migration
  - AWS DocumentDB Migration
  - 기존 Tenant의 무중단 SaaS 전환
<br/>

## NDC Aggregator Platform SaaS 전환
- Monolithic Architecture → Cell-based Architecture로의 전환
  - XML 데이터 Aggregation 및 Converting Cell / 항공사 호출 Cell / DB 접근 Cell 로 분리
  - 여행사와 항공사 간의 데이터 처리 효율성 증대
  - Tenant 증가에 따른 확장성 확보
`,o=`## NDC Aggregator Platform 운영 및 고도화
- Java 1.8 + SpringBoot 2.x -> Java 21 + SpringBoot 3.x 전환 및 어플리케이션 최적화
  - CPU, Memory 사용량 약 30% 감소, 인프라 비용 약 10% 절감
- Svelte를 활용한 사내 테스트 페이지 운영 및 고도화
  - 팀 QA 효율성 증대
- 팀내 업무 효율성 증대를 위한 업무 자동화
  - AWS Lambda + Opensearch를 활용하여 항공사 장애 발생 감지 자동화

`,r=`## Tenant, Cell Provisioning 환경 구성
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
-  Loki, Grafana, Tempo, Mimir를 활용하여 로그, 메트릭, 트레이스를 통합, 분산 시스템의 가시성을 확보하고 선제적 장애 대응 체계 마련`,t=[{slug:"saas-operation",color:"#ff3e00",description:o,shortDescription:"NDC Aggregator Platform 운영 및 고도화",links:[],logo:e.Tidesquare,name:"NDC Aggregator Operation",period:{from:new Date(2023,2,2),to:new Date(2024,2,1)},skills:n("java","springboot","aws","sass"),type:"B2B SaaS",screenshots:[]},{slug:"saas-backend",color:"silver",description:a,shortDescription:"NDC Aggregator Platform SaaS 전환",links:[],logo:e.Tidesquare,name:"NDC Aggregator Platform SaaSification with AWS Proserve",period:{from:new Date(2024,2,1),to:new Date(2024,5,30)},skills:n("java","springboot","postgresql","aws","documentDB","elasticache"),type:"B2B SaaS",screenshots:[]},{slug:"saas-infra",color:"violet",description:r,shortDescription:"NDC Aggregator Platform Global Infra 구축 및 운영",links:[],logo:e.Tidesquare,name:"NDC Aggregator Platform Infra",period:{from:new Date(2024,5,30)},skills:n("terraform","kubernetes","aws","argocd"),type:"B2B SaaS",screenshots:[]}],i="Projects",g={title:i,items:t};export{g as P};
