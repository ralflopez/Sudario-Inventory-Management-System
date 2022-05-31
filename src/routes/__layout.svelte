<script>
    import '../app.css'
</script>

<svelte:head>
    <title>Sudario's</title>
</svelte:head>

<!-- Navbar -->
<div class="text-center flex flex-col justify-center shadow-sm h-20 fixed top-0 left-0 right-0 bg-white">
    <div class="flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#16a34a" class="bi bi-brightness-alt-low-fill" viewBox="0 0 16 16">
            <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm10.243-3.536a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-8.486-.707a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z"/>
        </svg>
        <h1 class="font-bold text-xl text-green-600">Sudario's</h1>
    </div>
    <p class="text-sm text-gray-400">Rice Wholesaler</p>
</div>
<!-- Body -->
<div class="bg-gray-100 min-h-screen pt-28 pb-8">
    <div class="container max-w-5xl mx-auto px-4">
        <slot></slot>
    </div>
</div>