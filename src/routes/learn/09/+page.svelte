<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Counter } from '$lib/learn/counter.svelte';
	import Content from './info.md';

	let counter = new Counter(0);
</script>

<section class="items-center pt-4">
	<Button onclick={() => counter.count++}>
		{counter.count}
	</Button>
</section>

<article class="prose dark:prose-invert">
	<Content />
</article>
