### Transitions

```ts
<script lang="ts">
	import { fade } from 'svelte/transition';
	import Content from './info.md';
	import Button from '$lib/components/ui/button/button.svelte';
	import { elasticOut } from 'svelte/easing';

	let visible = $state(false);

	function whoosh(
		node: HTMLElement,
		params: { delay?: number; duration?: number; easing?: (t: number) => number }
	) {
		const existingTransform = getComputedStyle(node).transform.replace('none', '');

		return {
			delay: params.delay || 0,
			duration: params.duration || 400,
			easing: params.easing || elasticOut,
			css: (t, u) => `transform: ${existingTransform} scale(${t})`
		};
	}

	let play = $state(false);

	setInterval(() => (play = !play), 2000);
</script>

{#if play}
	<h1>
		<span transition:fade={{ duration: 2000 }}>Hello</span>
		<span transition:fade={{ delay: 2000, duration: 1000 }}>World</span>
	</h1>
{/if}

<Button onclick={() => (visible = !visible)}>Transition</Button>

{#if visible}
	<div transition:fade={{ duration: 2000 }}>fades in and out over two seconds</div>
{/if}

{#if visible}
	<div in:whoosh>whooshes in</div>
{/if}

<article class="prose dark:prose-invert">
	<Content />
</article>
```
