import Assets from './assets';
import { getSkills } from './skills';
import type { Blog } from './types';
import karpenterMd from './md/karpenter.md?raw';
import kubecostMd from './md/kubecost.md?raw';
const items: Array<Blog> = [
	{
		slug: 'karpenter',
		color: '#ff3e00',
		description: karpenterMd,
		shortDescription: 'Karpenter 전환',
		links: [],
		logo: Assets.AWS,
		name: 'Karpenter 전환',
		period: {
			from: new Date(2025, 6, 15),
			to: new Date(2025, 6, 15)
		},
		skills: getSkills('terraform', 'aws'),
		type: 'Infra',
		screenshots: []
	},
	{
		slug: 'kubecost',
		color: '#ff3e00',
		description: kubecostMd,
		shortDescription: 'Kubecost 설치하기',
		links: [],
		logo: Assets.AWS,
		name: 'Kubecost 설치하기',
		period: {
			from: new Date(2025, 6, 16),
			to: new Date(2025, 6, 16)
		},
		skills: getSkills('terraform', 'aws'),
		type: 'Infra',
		screenshots: []
	}
];

const title = 'Blogs';

const BlogsData = { title, items };

export default BlogsData;
