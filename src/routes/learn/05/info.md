### Derived State Inspect

```ts
<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Content from './info.md';
	import { untrack } from 'svelte';

	let a = $state(0);
	let b = $state(0);

	$effect(() => {
		console.log(untrack(() => a) + b);
	});

	let obj = $state({ current: 0 });
	let arr = $state([]);

	// same as effect below
	$inspect(obj, arr);

	// $effect(() => {
	//     console.log(obj.current);
	// });

	// $effect(() => {
	//     console.log(arr.length);
	// });
</script>

<section class="flex-row items-center pt-4">
	{a}
	<Button onclick={() => a++}>A</Button>
	<Button onclick={() => b++}>B</Button>
	{b}
</section>

<section class="flex-rowitems-center pt-4">
	{obj.current}
	<Button
		onclick={() => {
			obj.current++;
			arr.push(1);
		}}>Update</Button
	>
	{arr}
</section>

<article class="prose dark:prose-invert">
	<Content />
</article>
```
