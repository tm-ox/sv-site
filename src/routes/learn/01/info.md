### State

```
<script lang="ts">
	import Content from './info.md';
	import Button from '$lib/components/ui/button/button.svelte';

	let count = $state(0);
	let counter = $state(0);

	setInterval(() => (counter += 1), 1000);
</script>

<section class="items-center pt-4">
	<Button onclick={() => count++}>
		{count}
	</Button>

	<p>{counter}</p>
</section>

<article class="prose dark:prose-invert">
	<Content />
</article>
```
