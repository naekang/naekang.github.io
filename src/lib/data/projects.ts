import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';
import saasBackendMd from './md/saas-backend.md?raw';
import saasOperationMd from './md/saas-operation.md?raw';
import saasInfraMd from './md/saas-infra.md?raw';
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
			from: new Date(2024, 5, 30)
		},
		skills: getSkills('terraform', 'kubernetes', 'aws', 'argocd'),
		type: 'B2B SaaS',
		screenshots: []
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
