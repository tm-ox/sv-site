### Component Lifecycle Functions

```ts
<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Content from './info.md';
	import { gsap } from 'gsap';

	let tween: gsap.core.Tween;
	let target: HTMLElement;

	onMount(() => {
		tween = gsap.to(target, { rotation: 360, x: 200, duration: 4 });
		// return () => tween.kill();
		onDestroy(() => {
			tween.kill();
		});
	});
</script>

<div class="h-48 w-48 rounded-xl bg-primary" bind:this={target}></div>

<article class="prose dark:prose-invert">
	<Content />
</article>
```
