import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'과금 데이터와 운영 로그로 원인을 찾아, 인프라 비용과 배포 중 오류를 줄여 온 DevOps 엔지니어 김진호입니다.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/naekang', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/jinho-kim-b065b0207/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Email', href: 'mailto:rlawlsgh6306@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
