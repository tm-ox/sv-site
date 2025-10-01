<script lang="ts">
	import type { BlogPost } from '$lib/types/data';
	import * as Card from '$lib/components/ui/card/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import Pager from '$lib/components/ui/Pager.svelte';

	let trimmedRows: BlogPost[] = $state([]);
	let { data }: { data: { articles: BlogPost[] } } = $props();
</script>

<section>
	<h1>Blog</h1>
	<Pager rows={data.articles} bind:trimmedRows />
	<div class="card-grid">
		{#each trimmedRows as article (article.id)}
			<Card.Root>
				<Card.Header>
					<Card.Title>{article.title.toUpperCase()}</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>{article.body.substring(0, 100)}...</p>
				</Card.Content>
				<Card.Footer>
					<Button href={`/blog/${article.id}`} class="mx-auto">Read More &rarr;</Button>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</section>
