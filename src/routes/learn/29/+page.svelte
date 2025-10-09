<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Counter, { icon, reset } from './Counter.svelte';

	import Content from './info.md';
</script>

<div class="flex gap-4">
	<Counter />
	<Counter />
	<Counter />
	<Counter />
</div>
<Button onclick={() => reset()}>Reset</Button>

<div class="flex gap-4">
	{@render icon()}
	{@render icon(50, 50)}
	{@render icon(100, 100)}
	{@render icon(200, 200)}
</div>

<article class="prose dark:prose-invert">
	<Content />
</article>
