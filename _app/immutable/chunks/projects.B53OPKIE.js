import{A as a}from"./assets.C1HPLtnj.js";import{a as r}from"./skills.BWRk2W4x.js";const o=`## AWS DMS를 활용한 DB Migration
- Tenant isolation 및 Row-level security를 위해 MySQL → PostgreSQL 전환
  - Row-level security 적용을 통해 Multi-tenant 환경 구현 및 보안 강화
- 무중단 SaaS 플랫폼 전환을 위해 AWS DMS를 활용한 Migration 진행
  - AWS Aurora MySQL -> AWS Aurora PostgreSQL 이종간 Migration
  - AWS DocumentDB Migration
  - 기존 Tenant의 무중단 SaaS 전환

## NDC Aggregator Platform SaaS 전환
- Monolithic Architecture → Cell-based Architecture로의 전환
  - XML 데이터 Aggregation 및 Converting Cell / 항공사 호출 Cell / DB 접근 Cell 로 분리
  - 여행사와 항공사 간의 데이터 처리 효율성 증대
  - Tenant 증가에 따른 확장성 확보
`,e=`## NDC Aggregator Platform 운영 및 고도화
- Java 1.8 + SpringBoot 2.x -> Java 21 + SpringBoot 3.x 전환 및 어플리케이션 최적화
  - CPU, Memory 사용량 약 30% 감소, 인프라 비용 약 10% 절감
- Svelte를 활용한 사내 테스트 페이지 운영 및 고도화
  - 팀 QA 효율성 증대
- 팀내 업무 효율성 증대를 위한 업무 자동화
  - AWS Lambda + Opensearch를 활용하여 항공사 장애 발생 감지 자동화

`,t=`## Terraform을 활용한 Global Architecture IaC 구축
- AWS Resource 모듈 및 사내 환경에 맞는 모듈 구성

## App of Apps 패턴을 활용한 통합 ArgoCD 구축
- Multi cluster 환경에서 통합 관리를 위한 통합 ArgoCD 구축
- Transit gateway를 활용하여 EKS 클러스터 간 통신 확보

## PCI-DSS, ISMS-P 인증을 위한 보안 강화
- Cross account, Multi region 환경에서 Transit gateway를 활용하여 통신하도록 함으로써 PCI-DSS 요건 충족
- NACL, Security Group 등을 활용한 보안 강화`,n=[{slug:"saas-operation",color:"#ff3e00",description:e,shortDescription:"NDC Aggregator Platform 운영 및 고도화",links:[],logo:a.Tidesquare,name:"NDC Aggregator Operation",period:{from:new Date(2023,2,2),to:new Date(2024,2,1)},skills:r("java","springboot","aws","sass"),type:"B2B SaaS",screenshots:[]},{slug:"saas-backend",color:"silver",description:o,shortDescription:"NDC Aggregator Platform SaaS 전환",links:[],logo:a.Tidesquare,name:"NDC Aggregator Platform SaaSification with AWS Proserve",period:{from:new Date(2024,2,1),to:new Date(2024,5,30)},skills:r("java","springboot","postgresql","aws"),type:"B2B SaaS",screenshots:[]},{slug:"saas-infra",color:"violet",description:t,shortDescription:"NDC Aggregator Platform Global Infra 구축 및 운영",links:[],logo:a.Tidesquare,name:"NDC Aggregator Platform Infra",period:{from:new Date(2024,5,30)},skills:r("terraform","kubernetes","aws","argocd"),type:"B2B SaaS",screenshots:[]}],s="Projects",g={title:s,items:n};export{g as P};
