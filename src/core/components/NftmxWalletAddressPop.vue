<script setup>
import { computed } from 'vue'
import { netExplorerURL } from '../config';

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
    <a :href="netExplorerURL + address" target="_blank">
        {{walletAddress}}
    </a>
</template>