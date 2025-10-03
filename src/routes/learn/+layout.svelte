<script>
	import Nav from '$lib/components/ui/Nav.svelte';

	let { children, data } = $props();
</script>

<section>
	<Nav links={data.learnNav.links} />
	{@render children?.()}
</section>
