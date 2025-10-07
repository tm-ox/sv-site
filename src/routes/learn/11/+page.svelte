<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { config } from '$lib/config.svelte';
	import Content from './info.md';
</script>

<Button onclick={config.toggleTheme}>
	{config.theme}
</Button>

<article class="prose dark:prose-invert">
	<Content />
</article>
