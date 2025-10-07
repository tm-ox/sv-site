### State

```ts
<script lang="ts">
	import Content from './info.md';
	import Button from '$lib/components/ui/button/button.svelte';

	let count = $state(0);
	let counter = $state(0);

	setInterval(() => (counter += 1), 1000);
</script>

	<Button onclick={() => count++}>
		{count}
	</Button>

	<p>{counter}</p>

<article class="prose dark:prose-invert">
	<Content />
</article>
```
