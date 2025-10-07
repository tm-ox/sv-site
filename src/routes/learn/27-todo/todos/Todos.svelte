<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';

	import AddTodo from './AddTodo.svelte';
	import TodoList from './TodoList.svelte';

	import TodoFilter from './TodoFilter.svelte';

	type Todo = { id: string; text: string; completed: boolean };

	let todos = $state<Todo[]>([]);
	let filter = $state('all');
	let filteredTodos = $derived(filterTodos());
	let remaining = $derived(remainingTodos());

	function addTodo(todo: string) {
		todos.push({
			id: crypto.randomUUID(),
			text: todo,
			completed: false
		});
		todo = '';
	}

	function removeTodo(todo: Todo) {
		todos = todos.filter((t) => t.id !== todo.id);
	}

	function filterTodos() {
		return todos.filter((todo) => {
			if (filter === 'all') return true;
			if (filter === 'active') return !todo.completed;
			if (filter === 'completed') return todo.completed;
		});
	}

	function setFilter(newFilter: Filter) {
		filter = newFilter;
	}

	function remainingTodos() {
		return todos.filter((todo) => !todo.completed).length;
	}

	function clearCompleted() {
		todos = todos.filter((todo) => !todo.completed);
	}
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Todos</Card.Title>
		<AddTodo {addTodo} />
	</Card.Header>
	<Card.Content>
		<TodoList todos={filteredTodos} {removeTodo} />
	</Card.Content>
	<Card.Footer class="flex flex-col gap-2">
		<TodoFilter {setFilter} {remaining} {clearCompleted} />
	</Card.Footer>
</Card.Root>
