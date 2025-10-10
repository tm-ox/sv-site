<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Content from './info.md';

	interface Options {
		duration?: number;
	}

	function flip(
		node: HTMLElement,
		{ from, to }: { from: DOMRect; to: DOMRect },
		options: Options = {}
	) {
		console.log({ from, to });
		const { duration = 1000 } = options;

		const dx = from.left - to.left;
		const dy = from.top - to.top;
		const dsx = from.width / to.width;
		const dsy = from.height / to.height;

		return {
			duration,
			css: (t: number, u: number) => {
				const x = dx * u;
				const y = dy * u;
				const sx = dsx + (1 - dsx) * t;
				const sy = dsy + (1 - dsy) * t;
				return `transform: translate(${x}px, ${y}px) scale(${sx}, ${sy})`;
			}
		};
	}

	function shuffle() {
		items = items.toSorted(() => Math.random() - 0.5);
	}

	let items = $state([...Array(10).keys()]);
</script>

<div class="grid grid-cols-5 gap-4">
	{#each items as item (item)}
		<div animate:flip>
			<Button class="w-full">{item + 1}</Button>
		</div>
	{/each}
</div>

<Button onclick={shuffle}>Shuffle</Button>

<article class="prose dark:prose-invert">
	<Content />
</article>
