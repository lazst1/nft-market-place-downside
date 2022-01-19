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
    <th scope="col" :class="[border?'border-r border-black':'', ps?'px-4':'px-6', 'py-2 text-xs font-medium tracking-wider text-left text-tertiary-400 dark:text-gray-400']">
        <slot />
    </th>
</template>