<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';

	let { data } = $props();
</script>

<Hero title={data.hero.title} desc={data.hero.dec} actions={data.hero.heroActions} />

<section class="h-svh">
	<h2 id={data.signup.id}>{data.signup.title}</h2>
	<label>
		Email
		<input type="email" />
	</label>
	<Button size="sm" variant="outline">Signup</Button>
</section>
