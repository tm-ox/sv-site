<script lang="ts">
	import type { BlogPost } from '$lib/types/data';

	let { data }: { data: BlogPost } = $props();

	// type Props = {
	// 	title: string;
	// 	body: string;
	// };

	// let { data }: { data: Props } = $props();
</script>

<section>
	<h4>{data.title}</h4>
	<p>{data.body}</p>
</section>
