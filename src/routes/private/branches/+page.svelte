<script>
	import Button from '$lib/components/Button.svelte';
	import Table from '$lib/components/data/Table.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { EllipsisVertical } from 'lucide-svelte';
	import { branches } from '../../../data/branches';
</script>

<PageTitle />

{#snippet header()}
	<th>Branch Name</th>
	<th>Branch Code</th>
	<th>Contact No.</th>
	<th>Branch Owner</th>
	<th>Address</th>
	<th>Action</th>
{/snippet}

{#snippet row(d)}
	<td>{d.branchName}</td>
	<td>{d.branchCode}</td>
	<td>{d.phone}</td>
	<td>{d.ownerName}</td>
	<td>{d.address}</td>
	<td>
		<Button variant="ghost" size="sm" look="circle">
			<EllipsisVertical />
		</Button>
	</td>
{/snippet}

<Table data={branches} {header} {row} />
