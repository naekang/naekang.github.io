import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';
import tideExpMd from './md/tide-exp.md?raw';
import coswealExpMd from './md/cosweal-exp.md?raw';
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
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'software-developer',
		company: 'Tidesquare',
		description: tideExpMd,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Seoul, Korea',
		period: { from: new Date(2023, 2, 2) },
		skills: getSkills('terraform', 'java', 'springboot', 'postgresql', 'aws', 'svelte'),
		name: 'Software Developer',
		color: 'red',
		links: [],
		logo: Assets.Tidesquare,
		shortDescription: 'Creating awesome applications for customers.'
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
