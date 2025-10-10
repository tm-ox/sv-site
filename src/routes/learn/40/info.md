### Better Tween

```ts
<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Content from './info.md';

	import { gsap } from 'gsap';

	function tween(vars: gsap.TweenVars, ref) {
		let tween: gsap.core.Tween;

		return (target: HTMLElement) => {
			tween = gsap.to(target, vars);
			ref?.(tween);
			return () => tween.kill();
		};
	}

	let animation: gsap.core.Tween;
</script>

<Button
	class="h-48 w-48 rounded-xl"
	{@attach tween({ rotation: 360, x: 2, duration: 2 }, (tween) => (animation = tween))}
	onclick={() => animation.restart()}>Play</Button
>

<article class="prose dark:prose-invert">
	<Content />
</article>
```
