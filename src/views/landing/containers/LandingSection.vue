<script setup>
defineProps({
    black: Boolean
})

</script>

<template>
    <div :class="[black ? 'bg-black' : '', 'text-white pt-14 lg:pt-24']">
        <slot />
    </div>
</template>
