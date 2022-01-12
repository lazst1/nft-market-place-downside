<script setup>
import { computed } from 'vue'
const props = defineProps({
    address: {
        type: String,
        required: true
    }
});

const walletAddress = computed(() => props.address.slice(0, 6)+'...'+props.address.slice(-4));

</script>

<template>
    <div>
        {{walletAddress}}
    </div>
</template>