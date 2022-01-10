<script setup>
import NftmxButton1 from './NftmxButton1.vue';

const props = defineProps({
    wallet: {
        type: Object,
        required: true
    }
});

</script>

<template>
    <div class="text-center">
        <div class="w-fit font-press text-sm pt-4 pb-6">
            <img :src="wallet.imgUrl" alt="" class="" />
            <nftmx-button1 size="big" class="-mt-6">CONNECT YOUR WALLET</nftmx-button1>
        </div>
        <div class="text-white text-sm py-1.25">
            Use a different wallet
        </div>
    </div>
</template>
