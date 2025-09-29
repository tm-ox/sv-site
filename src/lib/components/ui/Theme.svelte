<script lang="ts">
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import { toggleMode } from 'mode-watcher';
	import Button from './button/button.svelte';
</script>

<Button
	size="lg"
	variant="outline"
	class="mt-4 w-svw md:mt-0 md:h-8 md:w-auto md:text-sm"
	onclick={toggleMode}
>
	<SunIcon
		class="h-[1rem] w-[1rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90"
	/>
	<MoonIcon
		class="absolute h-[1rem] w-[1rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>
