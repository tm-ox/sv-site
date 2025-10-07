<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { blur } from 'svelte/transition';

	import Content from './info.md';

	let value = $state(0);
</script>

{#key value}
	<h1 in:blur>Ghost</h1>
{/key}

<Button onclick={() => value++}>Spook</Button>

<article class="prose dark:prose-invert">
	<Content />
</article>
