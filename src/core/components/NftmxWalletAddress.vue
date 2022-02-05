<script setup>
import { computed } from 'vue'
const props = defineProps({
    address: {
        type: String,
        required: true
    },
    disable: Boolean
});

const walletAddress = computed(() => props.disable?props.address:props.address.slice(0, 6)+'...'+props.address.slice(-4));

</script>

<template>
    <div>
        {{walletAddress}}
    </div>
</template>