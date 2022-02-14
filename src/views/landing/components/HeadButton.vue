<script setup>
import NftmxButton from '@/core/components/NftmxButton.vue';

defineProps({
    to: String,
    color: String,
    label: String
})

</script>


<template>
    <nftmx-button
        :to="to"
        :color="color"
        :label="label"
        class="font-press w-36.75 lg:w-full max-w-md text-xs lg:text-sm h-12 lg:h-15 mr-px hover:from-primary-600 hover:to-primary-500"
    />
</template>
