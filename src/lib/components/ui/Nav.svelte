<script lang="ts">
	import { onMount } from 'svelte';
	import { getStores } from '$app/stores';

	const { page } = getStores();

	import Button from './button/button.svelte';
	import Theme from './Theme.svelte';

	let isMenuOpen = $state(false);
	let isResizing = $state(false);

	let resizeTimeout: ReturnType<typeof setTimeout>;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	onMount(() => {
		function handleResize() {
			if (!isResizing) {
				isResizing = true;
			}
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				isResizing = false;
			}, 100);
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	type Links = {
		title: string;
		href: string;
	};

	let { links }: { links: Links[] } = $props();
</script>

<nav class="flex gap-2">
	<Button size="sm" variant="outline" class="md:hidden" name="menu" onclick={toggleMenu}
		>Menu</Button
	>

	<div
		class="
			z-50 flex w-full
			flex-col items-center gap-4 pb-48 backdrop-blur

			md:relative md:top-0 md:left-auto md:h-auto md:w-auto md:flex-row md:gap-1
			md:p-0 md:opacity-100 md:backdrop-blur-none

			{isMenuOpen ? 'fixed top-0 left-0 h-svh' : 'fixed top-[-110%] left-0'}
			{isResizing ? 'transition-none' : 'transition-all duration-300 ease-in md:transition-none'}
		"
	>
		<Button
			size="sm"
			variant="outline"
			class="my-8 cursor-pointer md:hidden"
			name="close-menu"
			onclick={toggleMenu}>X</Button
		>
		{#each links as link (link)}
			<Button
				size="lg"
				variant={$page.url.pathname === link.href ? 'default' : 'outline'}
				class="w-svw px-4 pt-1 md:h-8 md:w-auto md:text-sm"
				href={link.href}
				onclick={toggleMenu}>{link.title}</Button
			>
		{/each}
		<div class="bg-red h-8 p-0 md:hidden">
			<Theme />
		</div>
	</div>
</nav>
