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
		subjects: []
	}
];

const EducationData = { title, items };

export default EducationData;
