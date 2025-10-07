<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	let { setFilter, remaining, clearCompleted } = $props();
</script>

{remaining}
{remaining === 1 ? 'item' : 'items'} left
<div class="flex gap-1">
	{#each ['all', 'active', 'completed'] as filter (filter)}
		<Button size="sm" onclick={() => setFilter(filter)}>{filter}</Button>
	{/each}
	<Button size="sm" variant="outline" onclick={clearCompleted}>Clear Completed</Button>
</div>
