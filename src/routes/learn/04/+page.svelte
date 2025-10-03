<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Content from './info.md';

	let count = $state(0);
	let condition = $state(false);

	$effect(() => {
		if (condition) {
			console.log(count);
		}
		console.log(condition);
	});

	let counter = $state(0);
	let delay = $state(1000);

	$effect(() => {
		const interval = setInterval(() => counter++, delay);
		return () => clearInterval(interval);
	});
</script>

<section class="items-center pt-4">
	<div class="flex items-center gap-1">
		<div class="gap-1">
			<Button onclick={() => count++}>Click</Button>
			<Button onclick={() => (condition = !condition)}>Toggle</Button>
			<Button onclick={() => (delay *= 2)}>-</Button>
		</div>
		{counter}
		<Button onclick={() => (delay /= 2)}>+</Button>
	</div>
</section>

<article class="prose dark:prose-invert">
	<Content />
</article>
