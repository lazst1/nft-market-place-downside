<script setup>
defineProps({
    size: {
        type: String,
        default: 'small'
    },
    active: {
        type: Boolean,
        default: false
    }
})
</script>


<template>
    <button :class="[active?'bg-primary-900':'', 'hover:bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black']">
        <slot />
    </button>
</template>