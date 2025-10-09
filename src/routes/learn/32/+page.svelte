<script lang="ts">
	import Fade from './Fade.svelte';
	import Content from './info.md';
</script>

<div class="w-full text-center">
	<Fade options={{ duration: 2000 }} play><h1>👻</h1></Fade>
</div>

<article class="prose dark:prose-invert">
	<Content />
</article>
