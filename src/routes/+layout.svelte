<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { page } from '$app/state';
	import Nav from '$lib/components/ui/Nav.svelte';
	import { onNavigate } from '$app/navigation';
	import { Toaster } from '$lib/components/ui/sonner';
	import Theme from '$lib/components/ui/Theme.svelte';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	const siteMeta = {
		title: 'Site Name',
		desc: 'Site Description',
		og: '/og.jpg'
	};

	let title = $derived(
		page.data.meta?.title ? `${siteMeta.title} | ${page?.data.meta.title}` : `${siteMeta.title}`
	);
	let desc = $derived(page.data.meta?.desc ? page.data.meta.desc : siteMeta.desc);
	let ogImageURL = $derived(`${page.url.origin}${siteMeta.og}`);

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:type" content="article" />
	<meta property="og:image" content={ogImageURL} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<ModeWatcher />

<header class="fixed top-0 left-0 flex w-full justify-between px-4 py-4 sm:px-6">
	<div class="mx-auto flex w-full max-w-7xl items-center justify-between">
		<h4>👻</h4>
		<div class="flex gap-1">
			<Nav links={data.nav.links} />
			<div class="hidden h-8 p-0 md:block">
				<Theme />
			</div>
		</div>
	</div>
</header>

{@render children?.()}

<Toaster />
