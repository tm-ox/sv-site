<script lang="ts">
	import Content from './info.md';

	let cart = $state([
		{ item: 'apple', total: 10 },
		{ item: 'banana', total: 10 }
	]);

	let total = $derived.by(() => {
		let sum = 0;
		for (let item of cart) {
			sum += item.total;
		}
		return sum;
	});
</script>

<h1>Total: {total}</h1>

<article class="prose dark:prose-invert">
	<Content />
</article>
