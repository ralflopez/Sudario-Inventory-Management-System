<script>
    import { modalContent, open } from '../store/modal'
    import Modal from '../components/Modal.svelte'
    import EditProductContent from './EditProductContent.svelte'

</script>

<Modal>
    <p slot="title">{$modalContent.title}</p>
    <svelte:component slot="body" this={$modalContent.component}/>
</Modal>