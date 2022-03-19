<script setup>
defineProps({
    h1: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <p :class="[h1 ? 'text-xl sm:text-2xl lg:text-3xl' : '']">
        <slot />
    </p>
</template>