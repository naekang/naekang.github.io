import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: '컴퓨터과학부 학사',
		description: '',
		location: 'Seoul, Korea',
		logo: Assets.UosLogo,
		name: '',
		organization: 'University of Seoul',
		period: { from: new Date(2017, 2, 2), to: new Date(2023, 7, 22) },
		shortDescription: '',
		slug: 'uos-bachelor',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java']
	},
	// {
	// 	degree: 'PhD of Computer Science',
	// 	description: '',
	// 	location: 'USA',
	// 	logo: Assets.Unknown,
	// 	name: '',
	// 	organization: 'MIT',
	// 	period: { from: new Date(2023, 0, 1) },
	// 	shortDescription: '',
	// 	slug: 'dummy-education-item-2',
	// 	subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	// }
];

const EducationData = { title, items };

export default EducationData;
