import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';
import tideExpMd from './md/tide-exp.md?raw';
import coswealExpMd from './md/cosweal-exp.md?raw';
import healingpaperExpMd from './md/healingpaper-exp.md?raw';
import halocoExpMd from './md/haloco-exp.md?raw';
const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'backend-developer',
		company: 'Cosweal',
		description: coswealExpMd,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Seoul, Korea',
		period: { from: new Date(2021, 6, 1), to: new Date(2022, 1, 28) },
		skills: getSkills('java', 'springboot'),
		name: 'Backend Developer Intern',
		color: 'purple',
		links: [],
		logo: Assets.Cosweal,
		shortDescription:
			'광고 대상 추천 웹사이트의 Ruby on Rails 서버를 Java·Spring Boot로 이전했습니다.'
	},
	{
		slug: 'software-developer',
		company: 'Tidesquare',
		description: tideExpMd,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Seoul, Korea',
		period: { from: new Date(2023, 2, 2), to: new Date(2025, 10, 30) },
		skills: getSkills('terraform', 'java', 'springboot', 'postgresql', 'aws', 'svelte'),
		name: 'Software Developer',
		color: 'red',
		links: [],
		logo: Assets.Tidesquare,
		shortDescription:
			'NDC 항공 Aggregator 플랫폼의 백엔드 운영과 SaaS 전환, 멀티 계정 인프라 구축을 담당했습니다.'
	},
	{
		slug: 'platform-engineer',
		company: 'Healingpaper(강남언니)',
		description: healingpaperExpMd,
		contract: ContractType.FullTime,
		type: 'Platform Engineering',
		location: 'Seoul, Korea',
		period: { from: new Date(2025, 11, 1), to: new Date(2026, 2, 31) },
		skills: getSkills('kubernetes', 'argocd', 'aws'),
		name: 'Platform Engineer',
		color: 'pink',
		links: [],
		logo: Assets.Healingpaper,
		shortDescription: '사내 API 문서 통합 포탈과 개발자 생산성 도구를 만들었습니다.'
	},
	{
		slug: 'devops-engineer',
		company: 'TIDESQUARE(Halo & Co)',
		description: halocoExpMd,
		contract: ContractType.FullTime,
		type: 'DevOps',
		location: 'Seoul, Korea',
		period: { from: new Date(2026, 6, 8) },
		skills: getSkills('aws', 'kubernetes', 'terraform', 'argocd'),
		name: 'DevOps Engineer',
		color: 'red',
		links: [],
		logo: Assets.Tidesquare,
		shortDescription: 'AWS 멀티 계정 인프라의 비용·안정성·IaC 관리 체계를 담당합니다.'
	}
	// {
	// 	slug: 'software-freelance-junior',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date(2022, 0, 1), to: new Date() },
	// 	skills: getSkills('css', 'html', 'js'),
	// 	name: 'Junior Freelancer',
	// 	color: 'green',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome applications for customers.'
	// }
];

const ExperienceData = { title, items };

export default ExperienceData;
