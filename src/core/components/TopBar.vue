<script setup>
defineProps({
    search: {
        type: Boolean,
        default: false
    }
})
</script>


<template>
    <div
        :class="[search?'z-10':'z-30', 'top-0 left-0 right-0 sticky flex bg-black w-screen border-b border-black transition-position lg:w-auto lg:items-stretch dark:bg-gray-900 dark:border-gray-800 text-white font-ibm']"
    >
        <slot/>
    </div>
</template>