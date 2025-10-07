### Listening to Events / Form

```ts
<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import Input from '$lib/components/ui/input/input.svelte';
	import Content from './info.md';

	function onsubmit(e: SubmitEvent) {
		e.preventDefault();
		const data = new FormData(this);
		const email = data.get('email');
		console.log(email);
	}
</script>

<form {onsubmit}>
	<Card.Root>
		<Card.Content>
			<Input type="email" name="email" />
		</Card.Content>
		<Card.Footer>
			<Button type="submit">Subscribe</Button>
		</Card.Footer>
	</Card.Root>
</form>

<article class="prose dark:prose-invert">
	<Content />
</article>
```
