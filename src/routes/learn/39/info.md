### Element Lifecycle Functions using Attachments

#### Tween.svelte

```ts
<script lang="ts">
	import { onDestroy } from 'svelte';
	import gsap from 'gsap';
	import type { Snippet } from 'svelte';

	interface Props {
		tween?: gsap.core.Tween;
		vars: gsap.TweenVars;
		children: Snippet;
	}

	let { tween = $bindable(), vars, children }: Props = $props();
	let target: HTMLElement;

	$effect(() => {
		tween = gsap.to(target, { rotation: 360, x: 200, duration: 4 });
		// return () => tween.kill();
		onDestroy(() => {
			tween.kill();
		});
	});
</script>

<div bind:this={target}>
	{@render children?.()}
</div>
```

#### +page.svelte

```ts
<script lang="ts">
	import Content from './info.md';

	import Tween from './Tween.svelte';

	let animation: gsap.core.Tween;
</script>

<Tween bind:tween={animation} vars={{ rotation: 360, x: 200, duration: 2 }}>
	<button onclick={() => animation.restart()} class="h-48 w-48 rounded-full bg-primary">Play</button
	>
</Tween>

<article class="prose dark:prose-invert">
	<Content />
</article>
```
