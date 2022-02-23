<script setup>
import NftmxButton from '@/core/components/NftmxButton.vue';

defineProps({
    to: String,
    label: String
})

</script>

<template>
    <nftmx-button
        :to="to"
        color="primary"
        :label="label"
        :outline="true"
        class="font-ibm-medium text-lg text-primary-700 hover:text-white h-13.5 w-full sm:w-auto sm:px-13"
    />
</template>
