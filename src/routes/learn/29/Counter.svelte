<script lang="ts" module>
	import Button from '$lib/components/ui/button/button.svelte';

	// outputs different random number for every instance
	let id = crypto.randomUUID();
	// state
	let count = $state(0);
	// exporting functions
	export function reset() {
		count = 0;
	}
	// exporting snippets
	export { icon };
</script>

<div class="flex flex-col gap-4">
	<p>{id}</p>
	<Button onclick={() => count++}>{count}</Button>
</div>

{#snippet icon(width = 24, height = 24)}
	<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 24 24">
		<circle cx="50%" cy="50%" r="50%" fill="pink" />
	</svg>
{/snippet}
