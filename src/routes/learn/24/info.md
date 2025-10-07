### Function Bindings

```ts

<script lang="ts">
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Content from './info.md';

	let text = $state('I love Svelte');

	function toSpongeBobCase(text: string) {
		return text
			.split('')
			.map((c, i) => (i % 2 === 1 ? c.toUpperCase() : c.toLowerCase()))
			.join('');
	}
</script>

<Textarea
	bind:value={
		() => toSpongeBobCase(text),
		(v) => {
			text = toSpongeBobCase(v);
		}
	}
></Textarea>

<!--
<Textarea
	value={toSpongeBobCase(text)}
	oninput={(e) => {
		text = toSpongeBobCase((e.target as HTMLInputElement).value);
	}}
></Textarea>
-->

<article class="prose dark:prose-invert">
	<Content />
</article>

```
