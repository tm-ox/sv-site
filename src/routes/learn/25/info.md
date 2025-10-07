### Media Bindings

```ts
<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Content from './info.md';
	import Clip from './video.mp4';

	let clip = Clip;

	let currentTime = $state(0);
	let duration = $state(0);
	let paused = $state(true);
</script>

<div class="w-[600px]">
	<video class="w-full rounded" src={clip} bind:currentTime bind:duration bind:paused>
		<track kind="captions" />
	</video>

	<div class="flex items-center gap-2">
		<Button onclick={() => (paused = !paused)}>
			{paused ? '▶️' : '⏸️'}
		</Button>
		<span>{currentTime.toFixed(1)}/{duration.toFixed(1)}</span>
		<input type="range" class="flex-1" bind:value={currentTime} max={duration} step={0.1} />
	</div>
</div>

<article class="prose dark:prose-invert">
	<Content />
</article>
```
