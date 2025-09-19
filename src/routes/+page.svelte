<script lang="ts">
	import type { PageData } from './$types';
	import Hero from '$lib/components/ui/Hero.svelte';

	let { data }: { data: PageData } = $props();
</script>

<Hero title={data.hero.title} desc={data.hero.dec} actions={data.hero.heroActions} />

<section>
	<h2>{data.section01.title}</h2>
</section>
