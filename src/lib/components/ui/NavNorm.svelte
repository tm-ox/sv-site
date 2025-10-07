<script lang="ts">
	import { getStores } from '$app/stores';
	import Button from './button/button.svelte';

	const { page } = getStores();

	type Links = {
		title: string;
		href: string;
	};

	let { links }: { links: Links[] } = $props();
</script>

<div class="flex flex-wrap gap-1">
	{#each links as link (link)}
		<Button
			size="sm"
			variant={$page.url.pathname === link.href ? 'default' : 'outline'}
			class="pt-1 text-sm"
			href={link.href}>{link.title}</Button
		>
	{/each}
</div>
