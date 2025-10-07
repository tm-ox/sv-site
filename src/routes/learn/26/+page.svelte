<script lang="ts">
	import Content from './info.md';

	let width = $state();
	let height = $state();
</script>

<div class="flex w-fit flex-col gap-4" bind:clientWidth={width} bind:clientHeight={height}>
	<div class="w-fit rounded-xl border-2 border-solid border-primary p-4" contenteditable>
		Edit this
	</div>
	<div>{width} x {height}</div>
</div>

<article class="prose dark:prose-invert">
	<Content />
</article>
