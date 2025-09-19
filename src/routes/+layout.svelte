<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { page } from '$app/stores';
	import Nav from '$lib/components/ui/Nav.svelte';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>
		SITE {$page?.url?.pathname != '/' ? `| ${$page?.url?.pathname?.slice(1)}` : ''}
	</title>
</svelte:head>

<ModeWatcher />

<header class="fixed top-0 left-0 flex w-full justify-between px-4 py-4 sm:px-6">
	<div class="mx-auto flex w-full max-w-7xl items-center justify-between">
		Header
		<Nav />
	</div>
</header>

{@render children?.()}
