<script>
	import Button from '$lib/components/Button.svelte';
	import Table from '$lib/components/data/Table.svelte';
	import { Edit } from 'lucide-svelte';
	import { users } from '../../../data/users';
	import PageTitle from '$lib/components/PageTitle.svelte';
</script>

<PageTitle />

{#snippet header()}
	<th>S.No</th>
	<th>First Name</th>
	<th>Last Name</th>
	<th>Role</th>
	<th>Phone</th>
	<th> Action </th>
{/snippet}

{#snippet row(d)}
	<td>{d.id}</td>
	<td>{d.firstName}</td>
	<td>{d.lastName}</td>
	<td>{d.role}</td>
	<td>{d.phone}</td>
	<td>
		<Button size="sm" variant="ghost" look="circle">
			<Edit />
		</Button>
	</td>
{/snippet}

<Table data={users} {header} {row} />
