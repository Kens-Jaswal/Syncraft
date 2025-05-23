<script>
	import Button from '$lib/components/Button.svelte';
	import { ArrowLeft } from 'lucide-svelte';

	function goBack() {
		history.back(); // or window.history.back();
	}
</script>

<div class="h-screen place-content-center place-items-center">
	<div class="card w-72 justify-center">
		<h2>Under Construction</h2>
		<Button variant="ghost" on:click={goBack}>
			<ArrowLeft />
			Back
		</Button>
	</div>
</div>
