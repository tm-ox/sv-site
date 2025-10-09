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
