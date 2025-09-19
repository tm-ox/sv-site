<script lang="ts">
	import { domTheme } from '$lib/stores/themeStore';
	import heroLight from '$lib/assets/images/hero-light.jpg';
	import heroDark from '$lib/assets/images/hero-dark.jpg';
	import Button from '$lib/components/ui/button/button.svelte';

	type Action = {
		title: string;
		href: string;
	};

	let { title, desc, actions }: { title: string; desc: string; actions: Action[] } = $props();

	let heroImage = $derived.by(() => {
		return $domTheme === 'light' ? heroLight : heroDark;
	});
</script>

<div class="h-svh bg-cover bg-center" style={`background-image: url(${heroImage});`}>
	<section class="h-full items-center justify-center gap-4">
		<h1>{title}</h1>
		<h3 class="text-center font-normal">{desc}</h3>
		<div class="flex gap-2">
			{#each actions as action (action)}
				<Button size="lg" variant="outline" href={action.href}>{action.title}</Button>
			{/each}
		</div>
	</section>
</div>
