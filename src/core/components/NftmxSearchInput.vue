<script setup>
defineProps({
    navbar: Boolean,
    placeholder: String
})

</script>

<template>
    <div :class="[navbar?'w-full':'w-68.5 border border-black', 'flex justify-between items-center gap-4 px-6 h-12.5']">
        <div class="flex items-center w-full">
            <font-awesome-icon :icon="['fas', 'search']" class="text-white text-lg pointer-events-none" />
            <input class="text-white pl-6 py-2 font-ibm placeholder-tertiary-500 w-full border-0 focus:outline-none bg-tertiary-800" :placeholder="placeholder?placeholder:'Search'" />
        </div>
        <font-awesome-icon :icon="['fas', 'filter']" :class="[navbar?'text-lg':'text-sm', 'text-white hover:text-primary-900']" />
    </div>
</template>