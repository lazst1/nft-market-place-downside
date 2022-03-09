<script setup>
defineProps({
    value: String,
})
</script>

<template>
    <div
        class="transition cursor-pointer font-ibm-medium tracking-widest text-xs px-3 pt-2 pb-1.75 w-fit text-white bg-tertiary-700 hover:bg-primary-900"
    >#{{ value }}</div>
</template>
