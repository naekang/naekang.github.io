## AWS DMS를 활용한 DB Migration
- 테넌트 격리와 Row-level security 적용을 위해 MySQL → PostgreSQL 전환
- AWS DMS의 CDC로 Aurora MySQL 테이블 13개의 변경 데이터를 동기화해 **PostgreSQL 기반 멀티 테넌트 SaaS 환경으로 예약 데이터를 이관**
- 이관에 필요한 고객사 식별자 변환을 PostgreSQL 트리거로 구현해 **대상 시스템의 식별자 규칙에 맞춰 데이터를 적재**
<br/>

## NDC Aggregator Platform SaaS 전환
- Monolithic Architecture → Cell-based Architecture 전환
  - XML 데이터 Aggregation·Converting / 항공사 호출 / DB 접근 단위로 서비스를 분리
  - DB 접근 계층을 기존 MyBatis에서 JPA + QueryDSL로 전환
  - 고객사 증가에 따라 단위별로 확장할 수 있는 구조 확보
