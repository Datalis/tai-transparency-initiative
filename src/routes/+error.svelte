<script>
    import { page } from '$app/stores';
</script>

<div class="error-page">
    <h1>{$page.status}</h1>
    <span>
        {#if $page.status == 404}
            Page not found
        {/if}
    </span>
</div>

<style>
    .error-page {
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>