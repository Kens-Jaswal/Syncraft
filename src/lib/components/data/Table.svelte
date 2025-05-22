<script>
	let { data, header, row } = $props();
</script>

<table class="table">
	{#if header}
		<thead>
			<tr>{@render header()}</tr>
		</thead>
	{/if}
	<tbody>
		{#each data as d (d.id)}
			<tr>{@render row()}</tr>
		{/each}
	</tbody>
</table>
