<script setup>

defineProps({
    border: {
        type: Boolean,
        default: true
    },
    ps: Boolean
})

</script>

<template>
    <td :class="[border?'border-r border-black':'', ps?'px-4':'px-6', 'py-4 whitespace-nowrap text-xs font-medium text-white']">
        <slot />
    </td>
</template>
