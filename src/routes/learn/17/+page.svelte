<script lang="ts">
	import Content from './info.md';

	let todos = $state([
		{ id: 1, title: 'Todo 1', completed: false },
		{ id: 2, title: 'Todo 2', completed: true },
		{ id: 3, title: 'Todo 3', completed: false },
		{ id: 4, title: 'Todo 4', completed: true },
		{ id: 5, title: 'Todo 5', completed: false }
	]);
</script>

<ul>
	{#each todos as todo (todo)}
		{@const { id, title, completed: checked } = todo}
		<li>
			<input type="checkbox" {checked} />
			<span style:color={id % 2 === 0 ? 'pink' : ''}>{title}</span>
		</li>
	{/each}
</ul>

<article class="prose dark:prose-invert">
	<Content />
</article>
