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
