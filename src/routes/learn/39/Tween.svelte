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
