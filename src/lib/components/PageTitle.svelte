<script>
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import Button from './Button.svelte';
	import { Plus } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const title = derived(page, ($page) => {
		const segments = $page.url.pathname.split('/').filter(Boolean);
		const last = segments[segments.length - 1] || 'Home';
		return last.charAt(0).toUpperCase() + last.slice(1);
	});
</script>

<div class="flex gap-4">
	<h3 class="mb-3">{$title}</h3>
	<Button size="sm" look="circle" variant="outline" on:click={() => dispatch('openDrawer')}>
		<Plus />
	</Button>
</div>
