<script lang="ts">
	import { onMount } from 'svelte';
	import Theme from './Theme.svelte';
	import Button from './button/button.svelte';

	let isMenuOpen = false;
	let isResizing = false;
	let resizeTimeout: ReturnType<typeof setTimeout>;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	const items: { title: string; href: string }[] = [
		{ title: 'Home', href: '/' },
		{ title: 'About', href: '/about' }
	];

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

      {isMenuOpen ? 'fixed top-0 left-0 h-svh' : 'fixed top-[-100%] left-0'}
      {isResizing ? 'transition-none' : 'transition-all duration-300 ease-in md:transition-none'}
    "
	>
		<Button size="lg" variant="outline"
			class="my-8 cursor-pointer md:hidden"
			name="close-menu"
			onclick={toggleMenu}>X</Button
		>

		{#each items as item (item)}
			<Button size="sm" variant="outline" class="w-svw md:w-auto" href={item.href} onclick={toggleMenu}
				>{item.title}</Button
			>
		{/each}

		<Theme />
	</div>
</nav>
