<script setup>
import { computed } from 'vue'
import { netExplorerURL } from '@/core/config';

const props = defineProps({
    address: {
        type: String
    },
    disable: Boolean
});

const walletAddress = computed(() => props.disable ? props.address : props.address ? props.address.slice(0, 6) + '...' + props.address.slice(-4) : '');

</script>

<template>
    <a :href="netExplorerURL + address" target="_blank">{{ walletAddress }}</a>
</template>