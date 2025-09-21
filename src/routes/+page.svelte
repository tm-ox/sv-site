<script lang="ts">
	import Hero from '$lib/components/ui/Hero.svelte';
	import SignupForm from './SignupForm.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const hero = {
		title: 'HERO',
		dec: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ab atque doloremque, harum sed cupiditate unde dignissimos error tempore veniam doloribus ducimus, quas cumque omnis necessitatibus sapiente corrupti exercitationem placeat?',
		heroActions: [
			{ title: 'Services', href: '/' },
			{ title: 'Signup', href: '#signup' }
		]
	};

	const signup = {
		title: 'Signup',
		id: 'signup',
		card: {
			title: 'Signup',
			desc: 'Signup Description',
			inputs: [{ label: 'Email', name: 'email', type: 'email', placeholder: 'Email' }],
			button: 'Signup'
		},
		disclaimer: 'info / disclaimer'
	};
</script>

<Hero title={hero.title} desc={hero.dec} actions={hero.heroActions} />

<section id={signup.id} class="h-svh items-center justify-center">
	<h2>{signup.card.title}</h2>
	<SignupForm
		form={data.form}
		title={signup.card.title}
		desc={signup.card.desc}
		inputs={signup.card.inputs}
		buttonLabel={signup.card.button}
		disclaimer={signup.disclaimer}
	/>
</section>
