<script>

import IncommingProductForm from "./IncommingProductForm.svelte";
import OutgoingProductForm from "./OutgoingProductForm.svelte";

</script>

<div class="mb-8">
    <div class="flex items-center mb-4">
        <h1 class="font-bold text-3xl text-gray-800 mr-2">Orders</h1>
        <a href="/history" class="px-2 py-2 rounded-md mt-2 text-green-600">View History</a>
    </div>
    <div class="grid sm:grid-cols-2 gap-4">
        <div>
            <IncommingProductForm />
        </div>
        <div>
            <OutgoingProductForm />
        </div>
    </div>
</div>