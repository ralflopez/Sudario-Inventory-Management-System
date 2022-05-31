<script>
    import AppModal from '../components/AppModal.svelte'
    import ProductIndex from '../components/ProductIndex.svelte'
    import InventoryFormIndex from '../components/InventoryFormIndex.svelte';
    import { readProducts } from '../store/products';
    import { onMount } from 'svelte';

    onMount(async () => {
        await readProducts()
    })
</script>

<AppModal />
<InventoryFormIndex />
<ProductIndex />