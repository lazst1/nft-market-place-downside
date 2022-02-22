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
        :class="[search?'z-10':'z-30 sticky', 'top-0 left-0 right-0 flex bg-black border-b border-black transition-position lg:w-auto lg:items-stretch text-white font-ibm']"
    >
        <slot/>
    </div>
</template>
