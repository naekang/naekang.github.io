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
		'최적의 인프라를 구축하고 안정적인 서비스의 운영을 위해 끊임없이 고민하는 DevOps 엔지니어 김진호입니다.',
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
