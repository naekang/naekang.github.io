## NDC Aggregator Platform 운영 및 고도화
- Java 8 + Spring Boot 2.1 → Java 21 + Spring Boot 3.2로 전환하고 항공사·API 버전 조합 6가지의 연동 호환성을 검증해 운영 반영
  - **반영 전후 운영 CPU 평균 사용률 40% → 20%, 메모리 사용률 85% → 42% 확인**
  - 전환 전후 부하 테스트(nGrinder, vUser 16)에서 **TPS 6.3 → 7.5, 약 19% 향상 확인**
- Retool·Svelte 기반 관리자 화면을 개발해 **반복적인 QA·운영 작업을 UI에서 수행할 수 있도록 구성**
- AWS Lambda + OpenSearch로 항공사 장애 발생 감지를 자동화
