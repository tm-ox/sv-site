<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Counter } from '$lib/learn/counter.svelte';
	import Content from './info.md';

	let counter = new Counter(0);
</script>

<Button onclick={() => counter.count++}>
	{counter.count}
</Button>

<article class="prose dark:prose-invert">
	<Content />
</article>
