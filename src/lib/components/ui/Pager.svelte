<script lang="ts">
	import Button from './button/button.svelte';
	import * as Select from '$lib/components/ui/select/index.js';

	let { rows, trimmedRows = $bindable() } = $props();
	let totalRows = $derived(rows.length);
	let perPage = $state('8');
	let currentPage = $state(0);
	let totalPages = $derived(Math.ceil(totalRows / Number(perPage)));
	let start = $derived(currentPage * Number(perPage));
	let end = $derived(currentPage === totalPages - 1 ? totalRows - 1 : start + Number(perPage) - 1);

	$effect(() => {
		trimmedRows = rows.slice(start, end + 1);
	});
</script>

<div class="flex items-center justify-between">
	<div class="flex items-center gap-2">
		<Select.Root
			type="single"
			bind:value={perPage}
			onValueChange={() => {
				currentPage = 0;
			}}
		>
			<Select.Trigger class="w-[80px]">{perPage}</Select.Trigger>
			<Select.Content>
				<Select.Item value="8">8 Per Page</Select.Item>
				<Select.Item value="16">16 Per Page</Select.Item>
				<Select.Item value="32">32 Per Page</Select.Item>
			</Select.Content>
		</Select.Root>
		<p class="mt-1">
			{start + 1} - {end + 1} of {totalRows} records
		</p>
	</div>
	<div class="flex gap-2">
		<Button
			type="button"
			disabled={currentPage <= 0}
			onclick={() => {
				currentPage -= 1;
			}}>Prev</Button
		>
		<Button
			type="button"
			disabled={currentPage >= totalPages - 1}
			onclick={() => {
				currentPage += 1;
			}}>Next</Button
		>
	</div>
</div>
