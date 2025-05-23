<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let look: 'square' | 'circle' | undefined; // Optional
	export let disabled: boolean = false;
	export let cls = '';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const base = 'btn';
	const sizeClasses = {
		sm: 'btn-sm',
		md: 'btn-md',
		lg: 'btn-lg'
	};
	const lookClasses = {
		square: 'btn-square',
		circle: 'btn-circle'
	};
	const variantClasses = {
		primary: 'btn-primary',
		secondary: 'btn-secondary',
		outline: 'btn-outline',
		ghost: 'btn-ghost'
	};

	$: classes =
		`${base} ${sizeClasses[size]} ${variantClasses[variant]} ${lookClasses[look]} ${cls}`.trim();
</script>

<button {type} class={classes} {disabled} on:click={(e) => dispatch('click', e)}>
	<slot>Button</slot>
</button>
