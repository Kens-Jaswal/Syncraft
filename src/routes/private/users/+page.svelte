<script>
	import Table from '$lib/components/data/Table.svelte';
	import { users } from '../../../data/users';
    
	import PageTitle from '$lib/components/PageTitle.svelte';
</script>

<PageTitle/>
{#snippet header()}
	<th>First Name</th>
	<th>Last Name</th>
	<th>Role</th>
	<th>Phone</th>
{/snippet}

{#snippet row()}
	{#each users as user (user.id)}
		<td>{user.firstName}</td>
		<td>{user.lastName}</td>
		<td>{user.role}</td>
		<td>{user.phone}</td>
	{/each}
{/snippet}

<Table data={users} {header} {row} />
<!--
<ul class="mt-10">
	{#each users as user (user.id)}
		<li>{user.firstName} {user.lastName} - {user.role}</li>
	{/each}
</ul> -->
