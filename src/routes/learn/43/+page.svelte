<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Content from './info.md';

	import { getAbortSignal } from 'svelte';
	import { SvelteMap } from 'svelte/reactivity';

	let name = $state('');

	// pokemon cache
	const pokemon = new SvelteMap<string, unknown>();

	async function getPokemon() {
		// hits the cache
		if (!name || pokemon.has(name)) return;

		const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
		const response = await fetch(`${baseUrl}/${name}`, {
			signal: getAbortSignal()
		});
		if (!response.ok) throw new Error('💣️ oops!');
		const data = await response.json();

		// add to cache
		pokemon.set(name, data);
	}

	$effect(() => {
		getPokemon();
	});
</script>

<div class="flex flex-col gap-2">
	<Input type="search" bind:value={name} placeholder="Enter Pokemon name" />

	<div class="pokemon">
		{#each pokemon as [name, details] (name)}
			<details>
				<summary class="capitalize">{name}</summary>
				<div class="max-h-48 overflow-y-auto">
					>
					<pre class="border-0">{JSON.stringify(details, null, 2)}</pre>
				</div>
			</details>
		{/each}
	</div>

	<Button onclick={() => pokemon.clear()}>🧹 Clear</Button>
</div>

<article class="prose dark:prose-invert">
	<Content />
</article>
