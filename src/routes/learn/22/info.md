### Two Way Data Binding

```ts
<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import Content from './info.md';

	let list = $state(['Angular', 'React', 'Solid', 'Svelte', 'Vue', 'Qwik']);
	let filteredList = $derived(list.filter((item) => item.includes(search)));
	let search = $state('');
</script>

<Input type="search" placeholder="Search" bind:value={search} />

<ul>
	{#each filteredList as item (item)}
		<li>{item}</li>
	{:else}
		<p>No results</p>
	{/each}
</ul>

<article class="prose dark:prose-invert">
	<Content />
</article>
```
