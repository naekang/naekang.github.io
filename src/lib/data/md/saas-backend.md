## AWS DMS를 활용한 DB Migration
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
