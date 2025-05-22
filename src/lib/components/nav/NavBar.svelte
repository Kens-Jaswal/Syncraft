<script>
	import { page } from '$app/stores';
	const links = [
		{ id: 1, name: 'dashboard', path: '/private' },
		{ id: 2, name: 'Branches', path: '/private/branches' },
		{ id: 3, name: 'partners', path: '/private/partners' },
		{ id: 4, name: 'users', path: '/private/users' },
		{ id: 5, name: 'labtest', path: '/private/labtests' }
	];
	const linkSupports = [
		{ id: 1, name: 'access control', path: '/private/access-control' },
		{ id: 2, name: 'Refund', path: '/private' }
	];

	const linkOthers = [
		{ id: 1, name: 'Patients', path: '/private' },
		{ id: 2, name: 'lab Reports', path: '/private/labreports' }
	];
</script>

<nav class="flex flex-col gap-4">
	<div class="mb-4 flex flex-col gap-3">
		<h4 class="text-xs text-gray-400">MAIN MENU</h4>
		{#each links as link (link.id)}
			<a href={link.path} class="link ml-2 {$page.url.pathname === link.path ? 'text-sky-700' : ''}"
				>{link.name}</a
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-col gap-3">
		<h4 class="text-xs text-gray-400">OTHER MENU</h4>
		{#each linkOthers as linkOther (linkOther.id)}
			<a
				href={linkOther.path}
				class="link ml-2 {$page.url.pathname === linkOther.path ? 'text-sky-600' : ''}"
				>{linkOther.name}</a
			>
		{/each}
	</div>
	<div class="mb-4 flex flex-col gap-3">
		<h4 class="text-xs text-gray-400">ACCESS & SUPPORT</h4>
		{#each linkSupports as linkSupport (linkSupport.id)}
			<a
				href={linkSupport.path}
				class="link ml-2 {$page.url.pathname === linkSupport.path ? 'text-sky-600' : ''}"
				>{linkSupport.name}</a
			>
		{/each}
	</div>
</nav>
