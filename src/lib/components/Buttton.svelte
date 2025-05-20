<script lang="ts">
    export let type: 'button' | 'submit' | 'reset' = 'button';
    export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
    export let size: 'sm' | 'md' | 'lg' = 'md';
    export let disabled: boolean = false;
    export let className = '';
  
    // Forward events
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    // Combine base and conditional classes
    const base = 'inline-flex items-center justify-center rounded font-medium focus:outline-none';
    const sizeClasses = {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-5 py-2.5'
    };
  
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700',
      outline: 'border border-gray-400 text-gray-800 hover:bg-gray-100'
    };
  
    $: classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  </script>
  
  <button
    type={type}
    class={classes}
    disabled={disabled}
    on:click={(e) => dispatch('click', e)}
  >
    <slot>Button</slot>
  </button>
  