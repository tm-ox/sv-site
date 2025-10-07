<script lang="ts">
	import Content from './info.md';

	let canvas: HTMLCanvasElement;

	$effect(() => {
		const ctx = canvas.getContext('2d');
		console.log(ctx);
	});
</script>

<canvas bind:this={canvas} class="h-[200px] w-[200px] bg-foreground"></canvas>

<article class="prose dark:prose-invert">
	<Content />
</article>
