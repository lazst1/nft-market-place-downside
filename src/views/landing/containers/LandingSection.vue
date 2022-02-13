<script setup>
defineProps({
    black: Boolean
})

</script>

<template>
    <div :class="[black ? 'bg-black' : '', 'text-white py-14 lg:py-24']">
        <slot />
    </div>
</template>
