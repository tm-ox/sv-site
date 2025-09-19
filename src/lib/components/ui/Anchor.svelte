<script lang="ts">
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';

	type Props = {
		href: string;
		title: string;
	};

	let { href, title }: Props = $props();
</script>

<a {href} class={navigationMenuTriggerStyle()}>{title}</a>
