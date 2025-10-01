<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<h4
	bind:this={ref}
	data-slot="card-title"
	class={cn('text-center leading-none font-semibold', className)}
	{...restProps}
>
	{@render children?.()}
</h4>
