<script setup>
const props = defineProps({
    address: {
        type: String,
        required: true
    }
});

const walletAddress = props.address.slice(0, 6)+'...'+props.address.slice(-4);

</script>

<template>
    <div>
        {{walletAddress}}
    </div>
</template>