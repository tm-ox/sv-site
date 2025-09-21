<script lang="ts">
	let { data } = $props();
</script>

<section>
	<h1>{data.meta.title}</h1>
	{data.meta.desc}
</section>
