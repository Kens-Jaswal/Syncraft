<script>
	import { Home, Moon, Sun } from 'lucide-svelte';
	import Drawer from '../Drawer.svelte';
	import Button from '../Button.svelte';
	import { goto } from '$app/navigation';
	import ThemeChange from '../ThemeChange.svelte';

	let show = false;

	function hide() {}

	function toggle() {
		show = !show;
	}
</script>

<div class="navbar bg-base-100">
	<div class="ml-4 flex w-full justify-between gap-6">
		<div class="w-full">
			<Button look="circle" variant="ghost" on:click={() => goto('/private')}>
				<Home size="24" color="black" />
			</Button>
			<input type="text" placeholder="Search" class="input input-bordered w-48 md:w-1/2" />
		</div>
	</div>
	<div class="flex gap-2">
		<ThemeChange/>
		<div class="dropdown dropdown-end flex whitespace-nowrap">
			<div class="mr-4 place-content-center">
				<h4>Admin</h4>
			</div>
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img
						alt="Tailwind CSS Navbar component"
						src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
					/>
				</div>
			</div>
			<ul
				tabindex="-1"
				class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
			>
				<li>
					<a class="justify-between" href="/private/profile">
						Profile
						<span class="badge">New</span>
					</a>
				</li>
				<li><a href="/private/setting">Settings</a></li>
				<li><a href="/theme">Theme</a></li>
				<li><a href="/svelte-component">Components</a></li>
				<li class="mt-6 border-t border-slate-100 p-2"><a href="/">Logout</a></li>
			</ul>
		</div>
	</div>
</div>

{#if show}
	<Drawer />
{/if}
