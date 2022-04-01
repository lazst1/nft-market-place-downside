<script setup>
defineProps({
    line: {
        type: Number,
        default: 1
    },
    text: String
})

</script>

<template>
    <div class="truncated" :style="{ '-webkit-line-clamp': line }">{{ text }}</div>
</template>

<style scoped>
.truncated {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
