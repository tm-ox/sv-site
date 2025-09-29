<script lang="ts">
	import type { BlogPost } from '$lib/types/data';

	let { data }: { data: BlogPost } = $props();
</script>

<section>
	<h1>Blog</h1>

	<div class="article-list">
		{#each data.articles as article (article.id)}
			<a href={`/blog/${article.id}`} class="article-card">
				<h4>{article.title}</h4>
				<p>{article.body.substring(0, 100)}...</p>
				<span>Read Article &rarr;</span>
			</a>
		{/each}
	</div>
</section>
<!--
<style>
	.article-list {
		display: grid;
		gap: 20px;
	}

	.article-card {
		/* Style the anchor tag to look like a card */
		display: block;
		border: 1px solid #ccc;
		padding: 15px;
		border-radius: 8px;
		text-decoration: none; /* Remove underline */
		color: inherit; /* Inherit text color */
		transition: background-color 0.2s;
	}

	.article-card:hover {
		background-color: #f5f5f5;
		/* Optionally, style the heading/text to indicate interaction */
	}

	.article-card h2 {
		margin-top: 0;
		margin-bottom: 10px;
	}

	.article-card span {
		display: block;
		margin-top: 10px;
		font-weight: bold;
		color: blue; /* Make the "Read Article" text stand out */
	}
</style> -->
