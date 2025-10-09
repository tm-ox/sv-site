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
