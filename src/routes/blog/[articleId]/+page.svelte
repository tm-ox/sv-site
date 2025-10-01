<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
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
	<div class="flex items-center justify-between">
		<Button href="/blog" class="mr-auto">&larr; Back</Button>
		<div class="flex gap-2">
			<Button type="button">Prev</Button>
			<Button type="button">Next</Button>
		</div>
	</div>
</section>
