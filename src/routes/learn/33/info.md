### Custom Transitions

```ts
<script lang="ts">
	import type { TransitionConfig } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import Button from '$lib/components/ui/button/button.svelte';

	import Content from './info.md';

	function customTransition(node: HTMLElement, options?: TransitionConfig) {
		const { duration = 2000, delay = 0, easing = elasticOut } = options;

		return {
			duration,
			delay,
			easing,
			css: (t: number) => `
			color: hsl(${360 * t} , 100%, 80%);
			transform: scale(${t});
			`
		};
	}

	const chars = '!@#$%&*1234567890-=_+[]{}|;:,.<>/?';

	function getRandomCharacter() {
		return chars[Math.floor(Math.random() * chars.length)];
	}

	function scrambleText(node: HTMLElement, options?: TransitionConfig) {
		const { duration = 4000 } = options;
		const finalText = node.textContent;
		const length = finalText.length;

		return {
			duration,
			tick: (t: number) => {
				let output = '';
				for (let i = 0; i < length; i++) {
					if (t > i / length) {
						output += finalText[i];
					} else {
						output += getRandomCharacter();
					}
				}
				node.textContent = output;
			}
		};
	}

	let play = $state(false);
</script>

<Button onclick={() => (play = !play)}>Play</Button>

{#if play}
	<div in:customTransition>Whoooo!</div>
{/if}

{#key play}
	<p in:scrambleText>Scrambling Text Effect</p>
{/key}

<article class="prose dark:prose-invert">
	<Content />
</article>
```
