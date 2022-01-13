<script setup>
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import NftmxSelect from '@/core/components/NftmxSelect.vue';
import NftmxSelectNetwork from '@/core/components/NftmxSelectNetwork.vue';
const people = [
    {
        name: 'Wade Cooper',
        icon: '/images/i-eth.png',
    },
    {
        name: 'Wade Cooper',
        icon: '/images/i-eth.png',
    },
]
</script>

<template>
    <body-container>
        <div class="grid grid-cols-3 text-white">
            <div class="col-span-1" />
            <div class="col-span-2 font-press text-3xl">
                Create an NFT
            </div>
            <div class="col-span-1 font-ibm-bold text-lg">
                Blockchain
            </div>
            <div class="col-span-2 font-ibm text-sm text-tertiary-400">
                <nftmx-select-network />
            </div>
        </div>
    </body-container>
    <nftmx-footer />
</template>
