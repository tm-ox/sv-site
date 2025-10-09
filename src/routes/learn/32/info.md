### Autoplaying Transitions

#### Fade.svelte

```ts
<script lang="ts">
	import { fade, type FadeParams } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		play?: boolean;
		options?: FadeParams;
	}

	let { children, play = false, options = {} }: Props = $props();
</script>

{#if play}
	<div transition:fade|global={options}>
		{@render children?.()}
	</div>
{/if}
```

#### +page.svelte

```ts
<script lang="ts">
	import Fade from './Fade.svelte';
	import Content from './info.md';
</script>

<div class="w-full text-center">
	<Fade options={{ duration: 5200 }} play><h1>👻</h1></Fade>
</div>

<article class="prose dark:prose-invert">
	<Content />
</article>
```
