<script>
import { onMount } from 'svelte';

    import { readHistory, history } from '../store/history'
    let historyLen = 0
    onMount(async () => {
        await readHistory()
        console.log($history)
    })

    $: {
        historyLen = $history.length
    }
</script>
<div class="mb-8">
    <div class="flex items-center mb-4">
        <h1 class="font-bold text-3xl text-gray-800 mr-2">History</h1>
        <a href="/" class="px-2 py-2 rounded-md mt-2 text-green-600">Go back</a>
    </div>
    <div>
        <div class="grid grid-cols-2 md:grid-cols-5 mb-4 border-b-2 p-2 border-gray-200 font-bold">
            <p>No.</p>
            <p>Name</p>
            <p>Amount</p>
            <p>Price</p>
            <p class="hidden sm:block">Created</p>
        </div>
        {#each $history as history, i}
            <div class="grid grid-cols-2 md:grid-cols-5 mb-4 border-b-2 p-2 border-gray-200">
                <p>{historyLen - i}</p>
                <p>{!history.name ? 'DELETED' : history.name}</p>
                <p>{history.amount}</p>
                <p>P{history.price}</p>
                <p class="hidden sm:block">{history.created_on}</p>
            </div>
        {/each}
    </div>
</div>