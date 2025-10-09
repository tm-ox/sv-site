<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Accordion, AccordionItem } from './accordion';

	let open = $state(false);

	import Content from './info.md';
</script>

<Button variant="outline" size="sm" onclick={() => (open = !open)}>
	{open ? 'Close' : 'Open'}
</Button>

<Accordion bind:open>
	<AccordionItem>
		{#snippet accordionItem({ open, toggle })}
			<Button size="sm" variant="link" class="w-autp mr-auto " onclick={toggle}>
				Item A
				<h4 class:open class="mt-1">↕️</h4>
			</Button>

			{#if open}
				Content
			{/if}
		{/snippet}
	</AccordionItem>
	<AccordionItem>
		{#snippet accordionItem({ open, toggle })}
			<Button size="sm" variant="link" class="w-autp mr-auto " onclick={toggle}>
				Item B
				<h4 class:open class="mt-1">↕️</h4>
			</Button>

			{#if open}
				Content
			{/if}
		{/snippet}
	</AccordionItem>
</Accordion>

<article class="prose dark:prose-invert">
	<Content />
</article>
