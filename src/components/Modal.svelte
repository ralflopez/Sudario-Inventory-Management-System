<script>
    import { fade, fly } from 'svelte/transition'
    import { showModal, close } from '../store/modal'

</script>

{#if $showModal}
<div>
    <div on:click={close} transition:fade="{{ duration: 200 }}" class="fixed left-0 top-0 right-0 bottom-0 bg-black opacity-60"></div>
        <div in:fly="{{ y: -200 }}" out:fly="{{ y: -200 }}" class="bg-white top-8 mx-auto fixed px-6 py-8 pb-10 rounded-lg left-1/2 -translate-x-1/2">
            <div class="flex items-center justify-between mb-8 font-bold text-2xl">
                <slot name="title"></slot>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg cursor-pointer" viewBox="0 0 16 16" 
                    on:click={close}
                >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </div>
            <div>
                <slot name="body"></slot>
            </div>
        </div>
</div>
{/if}