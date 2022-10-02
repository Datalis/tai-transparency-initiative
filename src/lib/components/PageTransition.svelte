<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	import { page } from '$app/stores';
</script>

{#key $page.url.pathname}
	<main>
		<slot />
	</main>
{/key}
