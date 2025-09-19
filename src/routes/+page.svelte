<script lang="ts">
	import Hero from '$lib/components/ui/Hero.svelte';

	let { data } = $props();
</script>

<Hero title={data.hero.title} desc={data.hero.dec} actions={data.hero.heroActions} />

<section>
	<h2>{data.section01.title}</h2>
</section>
