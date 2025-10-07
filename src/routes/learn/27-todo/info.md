### Components

## Needs Refactoring

#### AddTodo.svelte

```ts
<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';

	let { addTodo, ...props } = $props();

	let todo = $state('');

	function onsubmit(event: Event) {
		event.preventDefault();
		addTodo(todo);
		todo = '';
	}
</script>

<form {onsubmit} {...props}>
	<Input type="text" placeholder="Add todo" bind:value={todo} />
</form>
```

#### TodoItems.svelte

```ts
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
```

#### TodoList.svelte

```ts
<script lang="ts">
	import TodoItems from './TodoItems.svelte';

	let { todos, removeTodo } = $props();
</script>

<ul class="text-left">
	{#each todos as todo (todo)}
		<TodoItems {todo} {removeTodo} />
	{/each}
</ul>
```

####

```ts

```
