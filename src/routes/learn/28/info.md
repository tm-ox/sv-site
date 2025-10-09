### Component Nesting / Snippet

#### +page.svelte

```ts
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
```

#### index.ts

```ts
export { default as Accordion } from './Accordion.svelte';
export { default as AccordionItem } from './AccordionItem.svelte';
```

#### AccordionItem.svelte

```ts
<script lang="ts">
	import { getContext, type Snippet } from 'svelte';

	interface Props {
		accordionItem?: Snippet<[accordionItem: { open: boolean; toggle: () => void }]>;
	}

	let { accordionItem }: Props = $props();

	const accordion = getContext('accordion');
	let open = $derived(accordion.open);

	function toggle() {
		open = !open;
	}
</script>

<div class="flex w-auto flex-col gap-2">
	{@render accordionItem?.({ open, toggle })}
</div>
```

#### Accordion.svelte

```ts
<script lang="ts">
	import { setContext, type Snippet } from 'svelte';

	interface Props {
		open: boolean;
		children: Snippet;
	}

	let { open = $bindable(), children }: Props = $props();

	setContext('accordion', {
		get open() {
			return open;
		}
	});
</script>

<div class="flex flex-col gap-4">
	{@render children?.()}
</div>
```
