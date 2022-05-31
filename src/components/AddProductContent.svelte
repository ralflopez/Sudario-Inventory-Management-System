<script>
    import { createProduct } from '../store/products'
    import { close } from '../store/modal'

    let name = ''
    let price = 0
    let stock = 0

    async function submit() {
        await createProduct(name, price, stock)
        close()
    }
    
</script>

<form on:submit|preventDefault={submit}>
    <label class="block mb-2">
        <span aria-label="Name">Name</span>
        <input class="bg-gray-200 rounded-md outline-none px-3 py-2 block w-full" type="text" name="name" bind:value={name} />
    </label>
    <label class="block mb-2">
        <span aria-label="Price">Price (PHP)</span>
        <input class="bg-gray-200 rounded-md outline-none px-3 py-2 block w-full" type="number" name="price" bind:value={price} min={0} max={10000000}/>
    </label>
    <button class="bg-green-600 px-4 py-2 rounded-md text-white mt-2">Add</button>
</form>