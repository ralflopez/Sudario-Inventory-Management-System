<script>
    import { open } from "../store/modal"
    import { products } from '../store/products'
    import InventoryItem from '../components/InvetoryItem.svelte'
    import AddProductContent from "./AddProductContent.svelte"
</script>

<div class="flex items-center">
    <h1 class="font-bold text-3xl text-gray-800 mr-2">Products</h1>
    <button on:click={() => {
        open({
            title: 'Add',
            component: AddProductContent,
            args: {}
        })
    }} class="px-2 py-2 rounded-md mt-2 text-green-600">Add Product</button>
</div>
<p class="mb-4 italic text-gray-400 text-sm">A summary of all your products. Click to edit.</p>
<div class="grid sm:grid-cols-3 gap-4 mb-8">
    {#each $products as product}
        <InventoryItem {product}/>
    {/each}
</div>