### State in Functions and Classes

```ts
<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Content from './info.md';

// Function
	function createCounter(initial: number) {
		let counterFunc = $state({ count: initial });
		return counterFunc;
	}
	const counterFunc = createCounter(0);

// Class
	class Counter {
		count: number;
		constructor(initial: number) {
			this.count = $state(initial);
		}
	}
	let counter = new Counter(0);
</script>

	<Button onclick={() => counterFunc.count++}>
		{counterFunc.count}
	</Button>
	Function
</section>

<section class="items-center pt-4">
	<Button onclick={() => counter.count++}>
		{counter.count}
	</Button>
	Class

<article class="prose dark:prose-invert">
	<Content />
</article>
```
