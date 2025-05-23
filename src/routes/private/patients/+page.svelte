<script>
	import Button from '$lib/components/Button.svelte';
	import Table from '$lib/components/data/Table.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { EllipsisVertical } from 'lucide-svelte';
	import { patients } from '../../../data/patients';
</script>

<PageTitle />

{#snippet header()}
	<th>UHID</th>
	<th>Phone</th>
	<th>Patient Name</th>
	<th>Guardian Name</th>
	<th>Date of Birth</th>
	<th>Gender</th>
	<th>Address</th>
	<th>ref. by</th>
	<th>action</th>
{/snippet}

{#snippet row(d)}
	<td>{d.uhid}</td>
	<td>{d.phone}</td>
	<td>{d.patientName}</td>
	<td>{d.guardianName}</td>
	<td>{d.dob}</td>
	<td>{d.gender}</td>
	<td>{d.address}</td>
	<td>{d.referredBy}</td>
	<td>
		<Button look="circle" variant="ghost" size="sm">
			<EllipsisVertical />
		</Button>
	</td>
{/snippet}

<Table data={patients} {header} {row} />
