<script>
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';

  const title = derived(page, $page => {
    const segments = $page.url.pathname.split('/').filter(Boolean);
    const last = segments[segments.length - 1] || 'Home';
    return last.charAt(0).toUpperCase() + last.slice(1);
  });
</script>

<h2>{$title}</h2>
