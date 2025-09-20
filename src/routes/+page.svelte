<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import Label from '$lib/components/ui/label/label.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { toast } from 'svelte-sonner';
	import { enhance } from '$app/forms';

	let { data } = $props();
</script>

<Hero title={data.hero.title} desc={data.hero.dec} actions={data.hero.heroActions} />

<section id={data.signup.id} class="h-svh items-center justify-center">
	<h2>{data.signup.card.title}</h2>
	<Card.Root class="w-full max-w-3xl">
		<Card.Header>
			<Card.Title></Card.Title>
			<Card.Description><h4 class="text-center">{data.signup.card.dec}</h4></Card.Description>
		</Card.Header>
		<form
			method="POST"
			use:enhance={() => {
				toast('Submitting the form...')
				return ({ result }) => {
					if (result.type === 'success') {
						toast.success('Thanks for signing up!');
					} else toast.error('Oops, please try again.');
				};
			}}
			class="flex flex-col gap-8"
		>
			<Card.Content class="flex flex-col gap-6">
				{#each data.signup.card.inputs as input (input)}
					<Label class="flex flex-col">
						<!-- <p>{input.label}</p> -->
						<Input name={input.name} type={input.type} placeholder={input.placeholder} required />
					</Label>
				{/each}
			</Card.Content>
			<Card.Footer>
				<Button type="submit" size="sm" class="w-full"
					>{data.signup.card.button}</Button
				>
			</Card.Footer>
		</form>
	</Card.Root>
	<p>{data.signup.disclaimer}</p>
</section>
