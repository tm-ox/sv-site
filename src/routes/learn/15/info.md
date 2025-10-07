### Asychronous Svelte

```ts
<script lang="ts">
	import Content from './info.md';

	async function getPokemon(pokemon: string) {
		const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
		const response = await fetch(`${baseUrl}/${pokemon}`);
		if (!response.ok) throw new Error('Pokemon not found');
		let { name, sprites } = await response.json();
		return { name, image: sprites['front_default'] };
	}
</script>

{#await getPokemon('pikach')}
	<p>Loading...</p>
{:then pokemon}
	<img src={pokemon.image} alt={pokemon.name} />
	<p>{pokemon.name}</p>
{:catch error}
	<p>{error.message}</p>
{/await}

<article class="prose dark:prose-invert">
	<Content />
</article>

<style>
	img {
		width: 300px;
		display: block;
		image-rendering: pixelated;
	}
</style>
```
