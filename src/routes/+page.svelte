<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import Label from '$lib/components/ui/label/label.svelte';
	import Input from '$lib/components/ui/input/input.svelte';

	let { data } = $props();
</script>

<Hero title={data.hero.title} desc={data.hero.dec} actions={data.hero.heroActions} />

<section id={data.signup.id} class="h-svh items-center justify-center">
    <h2>{data.signup.card.title}</h2>
	<Card.Root class="w-full max-w-3xl">
		<Card.Header>
			<Card.Title></Card.Title>
			<Card.Description><h4>{data.signup.card.dec}</h4></Card.Description>
		</Card.Header>
		<Card.Content>
			<form class="flex flex-col gap-4">
				<Label for="email"><h5>Your email address</h5></Label>
				<Input name="email" type="email" />
			</form>
		</Card.Content>
		<Card.Footer>
			<Button size="sm" variant="outline" class="w-full">Signup</Button>
		</Card.Footer>
	</Card.Root>
</section>
