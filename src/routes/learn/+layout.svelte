<script>
	import NavNorm from '$lib/components/ui/NavNorm.svelte';

	let { children, data } = $props();
</script>

<section class="flex flex-col gap-10">
	<NavNorm links={data.learnNav.links} />
	{@render children?.()}
</section>
