<script>
    import { open } from "../store/modal";
    import EditProductContent from "./EditProductContent.svelte";

    export let product
</script>

<div on:click={() => {
    open({
        title: 'Edit',
        component: EditProductContent,
        args: product
    })
}} class="bg-gray-200 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 ease-out cursor-pointer rounded-md p-4 border-2 border-gray-300">
    <p class="mb-2 font-bold text-2xl">{product.stock} <span class="text-lg">{product.stock > 1 ? 'pcs' : 'pc'}</span></p>
    <p class="text-xl mb-1">{product.name}</p>
    <p>P{product.price} <span class="text-gray-400">/ sack</span></p>
</div>