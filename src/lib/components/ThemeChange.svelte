<script>
	import { Palette, PanelTopInactive } from 'lucide-svelte';

	const themes = ['light', 'dark', 'cupcake', 'retro', 'halloween', 'aqua', 'valentine'];

	function setTheme(theme) {
		document.documentElement.setAttribute('data-theme', theme);
	}
</script>

<div class="dropdown">
	<div class="mr-2 pr-2 border-r">
		<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
			<Palette />
		</div>
	</div>
	<ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-auto p-2 shadow-sm">
		{#each themes as theme}
			<li><div  role="button" on:click={() => setTheme(theme)}>{theme}</div></li>
		{/each}
	</ul>
</div>
