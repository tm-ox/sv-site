### Special Elements

```ts
<script lang="ts">
	import Content from './info.md';

	import { scrollY } from 'svelte/reactivity/window';

	// let scrollY = $state(0);
</script>

<!-- <svelte:window bind:scrollY /> -->

<h1 class="sticky top-48">
	{scrollY.current}px
</h1>

<article class="prose dark:prose-invert h-screen">
	<Content />
</article>
```
