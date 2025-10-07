<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import Content from './info.md';

	import { getAbortSignal } from 'svelte';

	let pokemon = $state('gengar');
	let name = $state('');
	let ability = $state('');
	let image = $state('');

	async function getPokemon(pokemon: string) {
		const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
		const response = await fetch(`${baseUrl}/${pokemon}`, {
			signal: getAbortSignal()
		});
		if (!response.ok) throw new Error('Pokemon not found');
		return response.json();
	}

	$effect(() => {
		getPokemon(pokemon).then((data) => {
			name = data.forms[0].name;
			ability = data.abilities[0].ability.name;
			image = data.sprites.front_default;
		});
	});

	let titleName = $derived(name ? name.charAt(0).toUpperCase() + name.slice(1) : '');
</script>

<img src={image} alt={pokemon} />

<h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
<h3>{titleName}</h3>
<h4>Ability: {ability.toUpperCase()}</h4>
<!-- <input
    type="search"
    placeholder="Search Pokémon"
    oninput={(e) => (pokemon = e.target.value)}
/> -->
<Input
	type="search"
	placeholder="Search Pokémon"
	oninput={(e) => (pokemon = (e.target as HTMLInputElement).value)}
/>

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
