<script lang="ts">
	import { domTheme } from '$lib/stores/themeStore';
	import heroLight from '$lib/assets/images/hero-light.jpg';
	import heroDark from '$lib/assets/images/hero-dark.jpg';
	// import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	let { theme = 'Theme', title = 'Title' } = $props();

	// Use a derived state based on the passed theme
	let heroImage = $derived.by(() => {
		return theme === 'light' ? heroLight : heroDark;
	});

	// React to client-side theme changes
	$effect(() => {
		const currentTheme = $domTheme;
		heroImage = currentTheme === 'light' ? heroLight : heroDark;
	});

	const actions: { title: string; href: string }[] = [
		{ title: 'Services', href: '/' },
		{ title: 'Contact', href: '/' }
	];
</script>

<div class="h-svh bg-cover bg-center" style={`background-image: url(${heroImage});`}>
	<section class="h-full items-center justify-center gap-4">
		<h1>{title}</h1>
		<h3 class="text-center font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ab atque doloremque, harum sed cupiditate unde dignissimos error tempore veniam doloribus ducimus, quas cumque omnis necessitatibus sapiente corrupti exercitationem placeat?</h3>
		<div class="flex gap-2">
			{#each actions as action (action)}
			<Button size="lg" variant="outline" href={action.href}>{action.title}</Button>
			{/each}
		</div>
	</section>
</div>
