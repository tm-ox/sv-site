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
