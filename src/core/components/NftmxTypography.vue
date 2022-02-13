<script setup>
defineProps({
    home: {
        type: Boolean,
        default: false
    },
    h1: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <p :class="[home? 'text-home-sm lg:text-home-md xl:text-home-lg' : h1 ? 'text-xl sm:text-2xl lg:text-3xl' : '']">
        <slot />
    </p>
</template>