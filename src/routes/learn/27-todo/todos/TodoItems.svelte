<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { slide } from 'svelte/transition';

	let { todo, removeTodo } = $props();
</script>

<li transition:slide class="flex gap-4">
	<input type="checkbox" bind:checked={todo.completed} />
	<input type="text" class="mr-auto" bind:value={todo.text} />
	<Button variant="ghost" size="sm" onclick={() => removeTodo(todo)}>X</Button>
</li>
