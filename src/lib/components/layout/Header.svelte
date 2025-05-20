<script>
	import { Home } from 'lucide-svelte';
	import Drawer from '../Drawer.svelte';

	let show = false;

	function hide() {}

	function toggle() {
		show = !show;
	}
</script>

<div class="navbar bg-base-100">
	<div class="ml-4 flex w-full justify-between gap-6">
		<div class="w-full">
			<a class="btn btn-ghost btn-circle" href="/">
				<Home size="24" color="black" />
			</a>
			<input type="text" placeholder="Search" class="input input-bordered w-48 md:w-1/2" />
		</div>
		<div>
			<button class="btn" onclick={toggle}>New Patient</button>
		</div>
	</div>
	<div class="flex gap-2">
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img
						alt="Tailwind CSS Navbar component"
						src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
					/>
				</div>
			</div>
			<ul
				tabindex="0"
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
				<li class="mt-6 border-t border-slate-100 p-2"><a>Logout</a></li>
			</ul>
		</div>
	</div>
</div>

{#if show}
	<Drawer />
{/if}
