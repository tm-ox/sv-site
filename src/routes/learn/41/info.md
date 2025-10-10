### Regular Implimentation: Special Elements

#### See next for Svelte Special Element solution

```ts
<script lang="ts">
	import { onMount } from 'svelte';
	import Content from './info.md';
	import Hero from '$lib/components/ui/Hero.svelte';

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
```
