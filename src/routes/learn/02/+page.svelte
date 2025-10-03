<script lang="ts">
	import Content from './info.md';
	import Button from '$lib/components/ui/button/button.svelte';

	let count = $state(0);
	let factor = $state(0);
	let result = $derived(count * factor);
</script>

<section class="items-center pt-4">
	<h1>{count} * {factor} = {result}</h1>
	<div class="flex gap-1">
		<Button onclick={() => count++}>Count: {count}</Button>
		<Button onclick={() => factor++}>Factor: {factor}</Button>
	</div>
</section>

<article class="prose dark:prose-invert">
	<Content />
</article>
