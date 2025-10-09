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
