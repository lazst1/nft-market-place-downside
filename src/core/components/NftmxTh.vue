<script setup>

defineProps({
    border: {
        type: Boolean,
        default: true
    }
})

</script>

<template>
    <th scope="col" class="py-2 px-6 text-xs font-medium tracking-wider text-left text-tertiary-400 dark:text-gray-400" :class="{'border-r border-black': border}">
        <slot />
    </th>
</template>