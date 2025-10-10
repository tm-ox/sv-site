<script lang="ts">
	import { onMount } from 'svelte';
	import Content from './info.md';

	let scrollY = $state(0);

	function handleScroll() {
		scrollY = window.scrollY;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<h1>
	{scrollY}px
</h1>

<article class="prose dark:prose-invert">
	<Content />
</article>
