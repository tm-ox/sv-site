### Looping over Data

```ts
<script lang="ts">
	import Content from './info.md';

	let todos = $state([
		{ id: 1, title: 'Todo 1', completed: false },
		{ id: 2, title: 'Todo 2', completed: true },
		{ id: 3, title: 'Todo 3', completed: false }
	]);
</script>

<ul>
	{#each todos as { id, title, completed }, i (id)}
		<li>
			<input type="checkbox" checked={completed} />
			<span style:color={i % 2 === 0 ? 'pink' : ''}>{title}</span>
		</li>
	{:else}
		<li>No todos</li>
	{/each}
</ul>

<article class="prose dark:prose-invert">
	<Content />
</article>
```
