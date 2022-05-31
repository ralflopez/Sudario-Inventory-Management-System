<script>
    import { products } from '../store/products'
    import { createHistory } from '../store/history'

    let productId = null
    let amount = 0

    async function submit() {
        if (amount < 1 || !productId) {
            alert("No field should be blank")
            return
        }
        const p = $products.find(p => p.id === productId)
        if (!p) {
            alert("Product not found")
            return
        }
        if (amount > p.stock) {
            alert("Number cannot be greater than stock")
            return
        }

        await createHistory(productId, -amount, p.price)
        productId = null
        amount = 0
    }
</script>

<div class="bg-gray-200 rounded-md p-4 border-2 border-gray-300">
    <h3 class="font-bold text-xl">Outgoing Products</h3>
    <p class="mb-4 italic text-gray-400 text-sm">Fill out this form if you want to remove products</p>
    <form on:submit|preventDefault={submit}>
        {#each $products as product}
            <label class="block mb-1"> 
                <input type="radio" bind:group={productId} name="productId" value={product.id} />
                <span>{product.name} (P{product.price})</span>
            </label>
        {/each}
        <label class="block mb-2 mt-4">
            <span aria-label="Price">Amount</span>
            <input class="bg-gray-50 rounded-md outline-none px-3 py-2 block w-full" type="number" name="price" bind:value={amount} min={0} max={10000000}/>
        </label>
        <button class="bg-green-600 px-4 py-2 rounded-md text-white mt-2">Remove Inventory</button>
    </form>
</div>