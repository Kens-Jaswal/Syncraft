<script>
	let { data, header, row } = $props();
</script>

<div class="h-screen overflow-x-auto">
	<table class="table w-full">
		{#if header}
			<thead>
				<tr>{@render header()}</tr>
			</thead>
		{/if}

		<tbody>
			{#each data as d}
				<tr>{@render row(d)}</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.h-screen {
		height: calc(100vh - 400px);
	}
</style>
