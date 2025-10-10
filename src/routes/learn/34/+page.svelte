<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';

	import Content from './info.md';

	const [send, receive] = crossfade({
		// the duration is based on the distance
		duration: (d) => Math.sqrt(d * 200),
		// custom transition
		fallback(node, params) {
			return {
				css: (t) => `
					transform: scale(${t});
					opacity: ${t};
				`
			};
		}
	});

	interface Post {
		id: number;
		title: string;
		description: string;
		published: boolean;
	}

	let posts = $state<Post[]>([
		{
			id: 1,
			title: 'Post 1',
			description: 'Content',
			published: true
		},
		{
			id: 2,
			title: 'Post 2',
			description: 'Content',
			published: true
		},
		{
			id: 3,
			title: 'Post 3',
			description: 'Content',
			published: true
		}
	]);

	function togglePublished(post: Post) {
		const index = posts.findIndex((p) => p.id === post.id);
		posts[index].published = !posts[index].published;
	}

	function removePost(post: Post) {
		const index = posts.findIndex((p) => p.id === post.id);
		posts.splice(index, 1);
	}
</script>

<div class="posts">
	<h3>Posts</h3>
	<div class="grid grid-cols-3 gap-4">
		{#each posts.filter((posts) => posts.published) as post (post)}
			<article animate:flip={{ duration: 200 }} in:receive={{ key: post }} out:send={{ key: post }}>
				<Card.Root>
					<Card.Header>
						<h3>{post.title}</h3>
					</Card.Header>
					<Card.Content>
						<p class="text-left">{post.description}</p>
					</Card.Content>
					<Card.Footer class="justify-between">
						<button onclick={() => togglePublished(post)}>💾</button>
						<button onclick={() => removePost(post)}>❌</button>
					</Card.Footer>
				</Card.Root>
			</article>
		{:else}
			<p>There are no posts.</p>
		{/each}
	</div>
</div>

<div class="archive">
	<h3>Archive</h3>
	<div class="grid grid-cols-3 gap-4">
		{#each posts.filter((posts) => !posts.published) as post (post)}
			<article animate:flip={{ duration: 200 }} in:receive={{ key: post }} out:send={{ key: post }}>
				<Card.Root>
					<Card.Header>
						<h3>{post.title}</h3>
					</Card.Header>
					<Card.Content>
						<p class="text-left">{post.description}</p>
					</Card.Content>
					<Card.Footer class="justify-between">
						<button onclick={() => togglePublished(post)}>♻️</button>
					</Card.Footer>
				</Card.Root>
			</article>
		{:else}
			<p>Archived items go here.</p>
		{/each}
	</div>
</div>

<article class="prose dark:prose-invert">
	<Content />
</article>
