<script lang="ts">
	import Content from './info.md';

	let mouse = $state({ x: 0, y: 0 });

	function onmousemove(e: MouseEvent) {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	}
</script>

<div {onmousemove} aria-labelledby="mousemove" role="region">
	Mouse is {mouse.x} x {mouse.y}
</div>

<article class="prose dark:prose-invert">
	<Content />
</article>

<style>
	div {
		width: 100%;
		height: 100px;
	}
</style>
