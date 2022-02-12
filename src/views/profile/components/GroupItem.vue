<script setup>
defineProps({
    active: Boolean
})
</script>

<template>
    <div
        :class="[active ? 'text-primary-900' : '', 'mx-4 cursor-pointer hover:text-primary-700 font-ibm-medium']"
    >
        <slot />
    </div>
</template>
