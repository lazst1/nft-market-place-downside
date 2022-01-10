<script setup>
import NftmxButton1 from './NftmxButton1.vue';

const props = defineProps({
    wallet: {
        type: String,
        required: true
    }
});

</script>

<template>
    <div class="w-68 h-68 bg-tertiary-700 hover:shadow-[0_0px_15px_-3px_rgb(0_0_0_/_0.1),_0_0px_6px_-4px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700 text-center text-white text-sm font-ibm-bold py-7 mb-4">
        <img :src="wallet.imgUrl" alt="" class="w-42 mb-6">
        {{wallet.name}}
    </div>
</template>