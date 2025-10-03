<script lang="ts">
	import Content from './info.md';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/Flip';
	import { tick } from 'svelte';

	gsap.registerPlugin(Flip);

	let items = $state([...Array(10).keys()]);

	function shuffle() {
		items = items.toSorted(() => Math.random() - 0.5);
	}

	$effect.pre(() => {
		items;
		const state = Flip.getState('.item');
		// queueMicrotask(() => {
		// 	Flip.from(state, { duration: 1, stagger: 0.01, ease: 'power1.inOut' });
		// });
		tick().then(() => {
			Flip.from(state, { duration: 1, stagger: 0.01, ease: 'power1.inOut' });
		});
	});
</script>

<section class="items-center pt-4">
	<div class="grid w-full grid-cols-5 gap-2">
		{#each items as item (item)}
			<Card.Root class="item">
				<Card.Content class="w- pt-3">
					<h3 class="text-primary">
						{item}
					</h3>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>

	<Button onclick={shuffle}>Shuffle</Button>
</section>

<article class="prose dark:prose-invert">
	<Content />
</article>
