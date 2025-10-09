### Transitions | Global

```ts
<script lang="ts">
	import { fade } from 'svelte/transition';
	import Content from './info.md';
</script>

<div class="grid grid-cols-10 gap-4">
	{#each Array(20), i}
		<div in:fade|global={{ delay: i * 100 }}>
			{i + 1}
		</div>
	{/each}
</div>

<article class="prose dark:prose-invert">
	<Content />
</article>
```
