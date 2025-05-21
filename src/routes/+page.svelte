<script lang="ts">
	import { goto } from "$app/navigation";


	function goToPage() {
        goto('/private');
	}
</script>

<div class="mx-auto text-center flex w-fit h-screen place-content-center place-items-center">
    <div>
        <h1>login as</h1>
        <button class="btn mt-10" on:click={goToPage}>login</button>
    </div>
</div>
