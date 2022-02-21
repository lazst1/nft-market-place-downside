<script setup>
defineProps({
    value: String,
    active: Boolean
})
</script>

<template>
    <div
        :class="[active ? 'bg-primary-900' : 'bg-tertiary-700', 'cursor-pointer font-ibm-medium tracking-widest text-xs px-3 pt-2 pb-1.75 w-fit text-white']"
    >#{{ value }}</div>
</template>
