import{A as r}from"./assets.CttJwiCJ.js";import{a as o}from"./skills.DyoSMiCP.js";var n=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e))(n||{});const a=`## NDC Aggregator Platform 운영 및 고도화
- Java 8 + Spring Boot 2.1 → Java 21 + Spring Boot 3.2로 전환하고 항공사·API 버전 조합 6가지의 연동 호환성을 검증해 운영 반영
  - **반영 전후 운영 CPU 평균 사용률 40% → 20%, 메모리 사용률 85% → 42% 확인**
  - 전환 전후 부하 테스트(nGrinder, vUser 16)에서 **TPS 6.3 → 7.5, 약 19% 향상 확인**
- Retool·Svelte 기반 관리자 화면을 개발해 **반복적인 QA·운영 작업을 UI에서 수행할 수 있도록 구성**
- AWS Lambda + OpenSearch로 항공사 장애 발생 감지를 자동화
<br/>

## AWS DMS를 활용한 DB Migration
- 테넌트 격리와 Row-level security 적용을 위해 MySQL → PostgreSQL 전환
- AWS DMS의 CDC로 Aurora MySQL 테이블 13개의 변경 데이터를 동기화해 **PostgreSQL 기반 멀티 테넌트 SaaS 환경으로 예약 데이터를 이관**
- 이관에 필요한 고객사 식별자 변환을 PostgreSQL 트리거로 구현해 **대상 시스템의 식별자 규칙에 맞춰 데이터를 적재**
<br/>

## NDC Aggregator Platform SaaS 전환 with AWS Proserve

### Monolithic Architecture → Cell-based Architecture 전환
- XML 데이터 Aggregation·Converting / 항공사 호출 / DB 접근 단위로 서비스를 분리
  - DB 접근 계층을 기존 MyBatis에서 JPA + QueryDSL로 전환
- 고객사 증가에 따라 단위별로 확장할 수 있는 구조 확보
<br/>

### Terraform을 활용한 멀티 계정 인프라 IaC 구축
- 기존 ECS 환경을 EKS 환경으로 전환
- Terraform으로 개발·검증·운영 3개 환경을 다시 프로비저닝하고 WAF·Transit Gateway·HPA 구성을 코드화해 **환경별 설정을 코드로 재현·변경할 수 있도록 구성**
- Transit Gateway와 계정 간 리소스 공유(AWS RAM)를 Terraform으로 구성해 **서로 다른 AWS 계정의 클러스터 간 사설 통신 경로를 코드로 관리**
<br/>

### 고객사·인프라 환경 생성 자동화
- SvelteKit으로 팀 내 어드민 페이지 구축
- AWS Step Functions로 고객사 환경 생성(HMAC 키, 도메인, DB 설정)을 자동화하고, 코드 보완과 전 과정 검증 수행
- Bitbucket Pipelines, AWS CodeBuild, CodePipeline으로 환경 유형별 tfvars 생성과 인프라 프로비저닝을 자동화
<br/>

### App of Apps 패턴을 활용한 통합 ArgoCD 구축
- ArgoCD App of Apps로 3개 클러스터의 애플리케이션 배포 구성을 통합해 **배포 상태를 한 곳에서 조회·관리**
<br/>

### 운영 EKS Graviton(ARM) 전환
- 운영 클러스터 3개를 ALB 트래픽 가중치 50:50 → 100 단계 방식으로 ARM 인스턴스에 전환해 **전환 대상 인스턴스의 시간당 단가를 약 15% 낮춤**
- 기존 Bitbucket Pipelines의 멀티 아키텍처 빌드 제약을 amd64·arm64 병렬 단계로 해결해 **두 아키텍처 이미지를 하나의 파이프라인에서 생성**
<br/>

### ISO27001·PCI-DSS·ISMS-P 인증 요건 대응
- 운영 서비스 3곳의 네트워크에 PCI-DSS 4.0 기준 접근 제어(NACL)를 적용하고 Security Hub·CIS 점검 항목을 조치해 **운영 환경의 보안 설정을 보완**
- AWS Resilience Hub로 인프라 복원력을 평가하고 **RTO 2시간·RPO 10분의 복구 목표를 제안**
<br/>

### LGTM 관측성 플랫폼 구축
- Tempo 구축을 담당하고 Loki·Grafana·Mimir 공동 구축에 참여해 **로그·메트릭·트레이스를 Grafana에서 조회하는 관측성 환경 마련**
- AWS 주요 서비스의 CloudWatch 메트릭을 Mimir로 수집하고 **Grafana 대시보드 9종을 구성해 운영 지표 조회를 통합**
`,t=`## 광고대상 추천 알고리즘 개발
- 공공데이터 수집 및 테스트용 알고리즘 개발
<br/>

## 광고대상 추천 웹사이트 개발 참여
- Ruby On Rails → Java/SpringBoot Migration`,i=`## Swagger Aggregator 자체 개발 및 운영
- 53개 이상의 API 서비스에 대한 OpenAPI 스펙 통합 관리 포탈을 자체 개발해, 분산된 Swagger 문서를 단일 포탈에서 검색·조회할 수 있도록 개선
- ArgoCD Notification 기반 Auto Sync를 연동해, 서비스 배포 시 OpenAPI 스펙이 자동으로 최신 상태로 갱신되도록 구성
- 커스텀 Swagger UI로 검색과 UI를 사내 환경에 맞게 구성해 개발자 경험 개선
<br/>

## AI 기반 개발자 생산성 향상 프로젝트
- Swagger 포탈에 자연어 API 검색 기능과 API 챗봇 통합을 기획하고 MCP 개발
`,l=`## 비프로덕션 환경 통합
- 여러 클러스터에 나뉘어 있던 개발·샌드박스·스테이징 환경을 단일 EKS 클러스터로 통합해 **비프로덕션 비용을 월 환산 42% 절감**
- 기존 서비스 도메인과 IAM 역할을 보존한 채 워크로드를 이전해 **서비스 접속 주소 변경 없이 통합 환경으로 전환**
<br/>

## 운영 장애 원인 분석
- 컨테이너 종료 훅과 종료 유예 시간을 수정해 **배포할 때마다 20~30건 발생하던 API 5XX 오류를 이후 배포에서 0건으로 감소**
- 운영 계정의 일 비용을 2.3배로 높인 응답 전문 중복 로깅을 찾아내, 개발팀 수정 배포 후 **해당 로그 수집량이 일 448GB에서 2.9GB로 감소한 것을 검증**
<br/>

## 클라우드 비용 최적화
- Cost Explorer를 쓸 수 없는 환경에서 AWS 상세 과금 데이터(CUR)를 Athena로 분석하고 리소스별 실사용 여부를 검증해 **영향도 순 비용 절감 계획 수립**
- ArgoCD 반복 동기화를 일으키던 설정 불일치와 리소스 관리 충돌을 해소해 **시간당 감사 로그 수집량 61% 감소**
- ArgoCD 로그 레벨을 조정해 **애플리케이션 로그 수집량 88% 감소** (일 10.6GB → 1.3GB)
- 삭제 보호 설정 때문에 임시 데이터가 지워지지 않던 원인을 찾아 보존·수명주기 설정을 고치고 누적 객체를 정리해 **S3 저장량을 12.3TB에서 약 16GB로 축소**
<br/>

## IaC 관리 체계
- 4개 AWS 계정의 실제 리소스와 Terraform state를 대조하고 제외 기준을 정의해 **계정별 IaC 관리율 기준선 재산출**
- IaC 관리 정책·개선 계획·측정 계획을 작성해 **조직 승인을 받고 계정별 관리율 판정 기준 확정**
<br/>

## 팀 협업 체계
- Git PR 기반 의사결정 기록 체계와 운영 규칙을 설계·도입해 **결정 근거·승인자·변경 이력을 조회할 수 있는 팀 규칙으로 채택**
- 공휴일과 작업 재실행에도 순번이 유지되는 Slack 봇을 구현해 **팀 데일리 회의 진행자 순환 배정 자동화**
`,s="Experience",p=[{slug:"backend-developer",company:"Cosweal",description:t,contract:n.FullTime,type:"Software Development",location:"Seoul, Korea",period:{from:new Date(2021,6,1),to:new Date(2022,1,28)},skills:o("java","springboot"),name:"Backend Developer Intern",color:"purple",links:[],logo:r.Cosweal,shortDescription:"광고 대상 추천 웹사이트의 Ruby on Rails 서버를 Java·Spring Boot로 이전했습니다."},{slug:"software-developer",company:"Tidesquare",description:a,contract:n.FullTime,type:"Software Development",location:"Seoul, Korea",period:{from:new Date(2023,2,2),to:new Date(2025,10,30)},skills:o("terraform","java","springboot","postgresql","aws","svelte"),name:"Software Developer",color:"red",links:[],logo:r.Tidesquare,shortDescription:"NDC 항공 Aggregator 플랫폼의 백엔드 운영과 SaaS 전환, 멀티 계정 인프라 구축을 담당했습니다."},{slug:"platform-engineer",company:"Healingpaper(강남언니)",description:i,contract:n.FullTime,type:"Platform Engineering",location:"Seoul, Korea",period:{from:new Date(2025,11,1),to:new Date(2026,2,31)},skills:o("kubernetes","argocd","aws"),name:"Platform Engineer",color:"pink",links:[],logo:r.Healingpaper,shortDescription:"사내 API 문서 통합 포탈과 개발자 생산성 도구를 만들었습니다."},{slug:"devops-engineer",company:"TIDESQUARE(Halo & Co)",description:l,contract:n.FullTime,type:"DevOps",location:"Seoul, Korea",period:{from:new Date(2026,6,8)},skills:o("aws","kubernetes","terraform","argocd"),name:"DevOps Engineer",color:"red",links:[],logo:r.Tidesquare,shortDescription:"AWS 멀티 계정 인프라의 비용·안정성·IaC 관리 체계를 담당합니다."}],c={title:s,items:p};export{c as E};
