<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Content from './info.md';

	let status = $state('loading');
</script>

{#if status === 'loading'}
	<p>Loading...</p>
{:else if status === 'success'}
	<p>Success!</p>
{:else if status === 'error'}
	<p>Error</p>
{:else}
	<p>Impossible state</p>
{/if}

<div>
	<Button onclick={() => (status = 'success')}>Success</Button>
	<Button onclick={() => (status = 'error')}>Error</Button>
	<Button onclick={() => (status = 'other')}>Other</Button>
	<Button onclick={() => (status = 'loading')}>Loading</Button>
</div>

<article class="prose dark:prose-invert">
	<Content />
</article>
