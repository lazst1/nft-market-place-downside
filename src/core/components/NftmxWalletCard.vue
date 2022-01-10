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
    <div class="w-44 h-44 2xl:w-68 2xl:h-68 bg-tertiary-700 hover:shadow-[0_0px_15px_-3px_rgb(0_0_0_/_0.1),_0_0px_6px_-4px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700 text-center text-white text-xs 2xl:text-sm font-ibm-semi-bold flex justify-center items-center mb-4">
        <div class="h-fit -mt-2">
            <img :src="wallet.s_imgUrl" alt="" class="w-32 2xl:w-fit -mt-2.5 2xl:mb-2.5">
            {{wallet.name}}
        </div>
    </div>
</template>