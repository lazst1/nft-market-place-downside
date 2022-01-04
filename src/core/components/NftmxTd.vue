<script setup>

defineProps({
    border: {
        type: Boolean,
        default: true
    }
})

</script>

<template>
    <td class="px-6 py-4 whitespace-nowrap text-xs font-medium text-white" :class="{'border-r border-black': border}">
        <slot />
    </td>
</template>