<script>
import { onMount } from 'svelte';

    import { modalContent, close } from '../store/modal'
    import { deleteProduct, updateProduct } from '../store/products'

    let name = ''
    let price = ''

    onMount(() => {
        name = $modalContent.args.name
        price = $modalContent.args.price
    })

    async function submit() {
        if (!$modalContent.args?.id) return
        if (confirm(`Are you sure you want to update ${$modalContent.args.name}?`)) {
            await updateProduct($modalContent.args.id, name, price)
        }
        close()
    }

    async function del() {
        if (!$modalContent.args?.id) return
        if (confirm(`Are you sure you want to delete ${$modalContent.args.name}?`)) {
            await deleteProduct($modalContent.args.id)
        }

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
    <button on:click={del} type="button" class="rounded-md mt-2 text-green-600 block">Delete {name}</button>
    <button class="bg-green-600 px-4 py-2 rounded-md text-white mt-2">Edit</button>
</form>