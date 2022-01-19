<script setup>

defineProps({
    border: {
        type: Boolean,
        default: true
    }
})

</script>

<template>
    <thead class="border-b border-black">
        <slot />
    </thead>
</template>