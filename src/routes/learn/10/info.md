### Passing Gloabl State into Functions and Classes

```ts
<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Counter } from '$lib/learn/counter.svelte';
	import Content from './info.md';

	class Doubler {
		count: number;
		constructor(counter: number) {
			this.count = $derived(counter.count * 2);
		}
	}

	const counter = new Counter(0);
	const doubled = new Doubler(counter);
</script>

	<Button onclick={() => counter.count++}>
		{doubled.count}
	</Button>

<article class="prose dark:prose-invert"> w
	<Content />
</article>
```
