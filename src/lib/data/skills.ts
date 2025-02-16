import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';
import terraformMd from './md/terraform.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Collaboration tools', slug: 'collab-tools' }),
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'terraform',
		color: 'purple',
		description: terraformMd,
		logo: Assets.Terraform,
		name: 'Terraform',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'blue',
		description: '',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: '',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description: '',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'argocd',
		color: 'orange',
		description: '',
		logo: Assets.ArgoCD,
		name: 'ArgoCD',
		category: 'devops'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: '',
		logo: Assets.Postgresql,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'springboot',
		color: 'cyan',
		description: '',
		logo: Assets.Springboot,
		name: 'Springboot',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelteMd,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'atlassian',
		color: 'blue',
		description: 'Jira를 활용한 팀 협업 및 업무 관리',
		logo: Assets.Atlassian,
		name: 'Jira',
		category: 'collab-tools'
	}),
	defineSkill({
		slug: 'confluence',
		color: 'blue',
		description: 'Confluence를 활용한 문서 관리 및 협업',
		logo: Assets.Atlassian,
		name: 'Confluence',
		category: 'collab-tools'
	}),
	defineSkill({
		slug: 'slack',
		color: 'red',
		description: 'Slack를 활용한 팀 협업 및 업무 관리',
		logo: Assets.Slack,
		name: 'Slack',
		category: 'collab-tools'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
