### Module Context

#### Counter.svelte

```ts
<script lang="ts" module>
	import Button from '$lib/components/ui/button/button.svelte';

	// outputs different random number for every instance
	let id = crypto.randomUUID();
	// state
	let count = $state(0);
	// exporting functions
	export function reset() {
		count = 0;
	}
	// exporting snippets
	export { icon };
</script>

<div class="flex flex-col gap-4">
	<p>{id}</p>
	<Button onclick={() => count++}>{count}</Button>
</div>

{#snippet icon(width = 24, height = 24)}
	<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 24 24">
		<circle cx="50%" cy="50%" r="50%" fill="pink" />
	</svg>
{/snippet}
```

#### +page.svelte

```ts
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
```
