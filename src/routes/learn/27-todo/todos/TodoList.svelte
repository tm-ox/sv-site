<script lang="ts">
	import TodoItems from './TodoItems.svelte';

	let { todos, removeTodo } = $props();
</script>

<ul class="text-left">
	{#each todos as todo (todo)}
		<TodoItems {todo} {removeTodo} />
	{/each}
</ul>
