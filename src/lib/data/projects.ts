import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';
import saasBackendMd from './md/saas-backend.md?raw';
import saasOperationMd from './md/saas-operation.md?raw';
import saasInfraMd from './md/saas-infra.md?raw';
import projNonprodMd from './md/proj-nonprod.md?raw';
import projCostMd from './md/proj-cost.md?raw';
import projIacMd from './md/proj-iac.md?raw';
const items: Array<Project> = [
	{
		slug: 'saas-operation',
		color: '#ff3e00',
		description: saasOperationMd,
		shortDescription: 'NDC Aggregator Platform 운영 및 고도화',
		links: [],
		logo: Assets.Tidesquare,
		name: 'NDC Aggregator Operation',
		period: {
			from: new Date(2023, 2, 2),
			to: new Date(2024, 2, 1)
		},
		skills: getSkills('java', 'springboot', 'aws', 'sass'),
		type: 'B2B SaaS',
		screenshots: []
	},
	{
		slug: 'saas-backend',
		color: 'silver',
		description: saasBackendMd,
		shortDescription: 'NDC Aggregator Platform SaaS 전환',
		links: [],
		logo: Assets.Tidesquare,
		name: 'NDC Aggregator Platform SaaSification with AWS Proserve',
		period: {
			from: new Date(2024, 2, 1),
			to: new Date(2024, 5, 30)
		},
		skills: getSkills('java', 'springboot', 'postgresql', 'aws', 'documentDB', 'elasticache'),
		type: 'B2B SaaS',
		screenshots: []
	},
	{
		slug: 'saas-infra',
		color: 'violet',
		description: saasInfraMd,
		shortDescription: 'NDC Aggregator Platform Global Infra 구축 및 운영',
		links: [],
		logo: Assets.Tidesquare,
		name: 'NDC Aggregator Platform Infra',
		period: {
			from: new Date(2024, 5, 30),
			to: new Date(2025, 10, 30)
		},
		skills: getSkills('terraform', 'kubernetes', 'aws', 'argocd'),
		type: 'B2B SaaS',
		screenshots: []
	},
	{
		slug: 'nonprod-consolidation',
		color: 'teal',
		description: projNonprodMd,
		shortDescription:
			'개발·샌드박스·스테이징 환경을 단일 EKS 클러스터로 통합해 비프로덕션 비용 42% 절감',
		links: [],
		logo: Assets.Tidesquare,
		name: '비프로덕션 환경 통합',
		period: {
			from: new Date(2026, 6, 8),
			to: new Date(2026, 7, 14)
		},
		skills: getSkills('aws', 'kubernetes', 'terraform', 'argocd'),
		type: 'Infra',
		screenshots: []
	},
	{
		slug: 'cloud-cost-optimization',
		color: 'darkorange',
		description: projCostMd,
		shortDescription: '과금 데이터 분석으로 로그 수집량 88%·감사 로그 61% 감소, S3 12.3TB 정리',
		links: [],
		logo: Assets.Tidesquare,
		name: '클라우드 비용 최적화',
		period: {
			from: new Date(2026, 6, 8),
			to: new Date(2026, 8, 9)
		},
		skills: getSkills('aws', 'kubernetes', 'argocd'),
		type: 'Infra',
		screenshots: []
	},
	{
		slug: 'iac-governance',
		color: 'royalblue',
		description: projIacMd,
		shortDescription: '4개 AWS 계정의 IaC 관리율 기준선과 관리 정책 수립',
		links: [],
		logo: Assets.Tidesquare,
		name: 'IaC 관리 체계 수립',
		period: {
			from: new Date(2026, 7, 26),
			to: new Date(2026, 8, 28)
		},
		skills: getSkills('terraform', 'aws'),
		type: 'Infra',
		screenshots: []
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
