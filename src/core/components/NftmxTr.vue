<script setup>

defineProps({
    border: {
        type: Boolean,
        default: true
    }
})

</script>

<template>
    <tr :class="{'border-b border-black': border}">
        <slot />
    </tr>
</template>