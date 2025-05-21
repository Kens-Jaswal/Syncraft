<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
	import '../../app.css';

	let { children } = $props();
</script>

<div class="mx-auto flex abc">
	<div class="h-screen w-60 border-r border-gray-100">
		<h1 class="mt-4 ml-6 text-lg">Syncraft</h1>
		<div class="px-6 pt-18">
			<NavBar />
		</div>
	</div>
	<div class="w-full">
		<Header />
		<div class="mt-10 px-10">
			{@render children()}
		</div>
	</div>
</div>
