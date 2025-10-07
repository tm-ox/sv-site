<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Content from './info.md';

	function onclick() {
		console.log('Clicked');
	}

	const events = {
		onclick: () => console.log('Clicked'),
		ondblclick: () => console.log('Double Clicked')
	};
</script>

<Button onclick={() => console.log('Clicked')}>Click</Button>

<Button {onclick}>Click</Button>

<Button {...events}>Click</Button>

<article class="prose dark:prose-invert">
	<Content />
</article>
