<script lang="ts">
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import BlogCard from '$lib/components/blogs/blog-card.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Toggle from '$lib/components/ui/toggle/toggle.svelte';
	import BlogsData from '$lib/data/blogs';
	import SkillsData from '$lib/data/skills';
	import type { Skill } from '$lib/data/types';

	interface SkillFilter extends Skill {
		isSelected?: boolean;
	}

	let filters: Array<SkillFilter> = $state(
		SkillsData.items.filter((it) => {
			return BlogsData.items.some((blog) =>
				blog.skills.some((skill) => skill.slug === it.slug)
			);
		})
	);

	let search = $state('');
	let result = $derived(
		BlogsData.items.filter((blog) => {
			const isFiltered =
				filters.every((item) => !item.isSelected) ||
				blog.skills.some((tech) =>
					filters.some((filter) => filter.isSelected && filter.slug === tech.slug)
				);

			const isSearched =
				search.trim().length === 0 ||
				blog.name.trim().toLowerCase().includes(search.trim().toLowerCase());

			return isFiltered && isSearched;
		})
	);

	const toggleSelected = (slug: string) => {
		filters = filters.map((it) => (it.slug === slug ? { ...it, isSelected: !it.isSelected } : it));
	};

	const onSearch = (query: string) => (search = query);
</script>

<SearchPage title={BlogsData.title} {onSearch}>
	<div class="flex flex-1 flex-col gap-8">
		<div class="flex flex-row flex-wrap gap-2">
			{#each filters as it (it.slug)}
				<Toggle
					pressed={it.isSelected}
					variant="outline"
					class="flex flex-row items-center gap-2 rounded-lg"
					on:click={() => toggleSelected(it.slug)}
				>
					{#if it.isSelected}
						<Icon icon="i-carbon-close" />
					{/if}
					{it.name}</Toggle
				>
			{/each}
		</div>
		{#if result.length === 0}
			<EmptyResult />
		{:else}
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each result as it (it.slug)}
					<BlogCard blog={it} />
				{/each}
			</div>
		{/if}
	</div>
</SearchPage>
