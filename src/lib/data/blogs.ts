import Assets from './assets';
import { getSkills } from './skills';
import type { Blog } from './types';
import karpenterMd from './md/karpenter.md?raw';
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
			from: new Date(2023, 2, 2),
			to: new Date(2024, 2, 1)
		},
		skills: getSkills('terraform', 'aws'),
		type: 'Infra',
		screenshots: []
	}
];

const title = 'Blogs';

const BlogsData = { title, items };

export default BlogsData;
