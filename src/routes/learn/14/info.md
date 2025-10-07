### Looping over Data

```ts
<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Content from './info.md';

	let itemsMap = new Map([
		['key1', 'value1'],
		['key2', 'value2']
	]);

	let itemsSet = new Set(['value1', 'value2']);

	function* generateItems() {
		yield 'value1';
		yield 'value2';
	}
</script>

<ul>
	{#each itemsMap as [key, value] (key)}
		<li>{key}: {value}</li>
	{/each}

	{#each itemsSet as item (item)}
		<li>{item}</li>
	{/each}

	{#each generateItems() as item (item)}
		<li>{item}</li>
	{/each}
</ul>

<div class="grid grid-cols-5 gap-2">
	{#each Array(5), row}
		{#each Array(3), col}
			<Button class="cell">{row},{col}</Button>
		{/each}
	{/each}
</div>

<article class="prose dark:prose-invert">
	<Content />
</article>
```
