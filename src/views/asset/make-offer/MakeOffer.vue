<script setup>
import { ref } from 'vue'
import BodyContainer from '@/core/container/BodyContainer.vue';
import Accordion from '@/core/components/accordion/BasicAccordion.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import ItemAction from './ItemAction.vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import marketService from '@/core/services/market.service';
import moralisService from '@/core/services/moralis.service';
import AssetHistory from '@/views/asset/sell/AssetHistory.vue';
import authService from '@/core/services/auth.service';
import AssetInfo from '@/core/components/asset/AssetInfo.vue';

const store = useStore();
const route = useRoute();
const router = useRouter();
const tokenAddress = route.params.tokenAddress;
const tokenId = route.params.tokenId;
const asset = ref({});

marketService.getAsset(tokenAddress, tokenId).then(res => {
    asset.value = res.data;
    console.log(res);
});
</script>

<template>
    <body-container>
        <div class="grid grid-cols-7 text-white gap-8 mt-11">
            <div class="col-span-7 lg:col-span-3 lg:mr-6.25">
                <asset-info
                    :asset="asset"
                />
            </div>
            <div class="col-span-7 mt-6 mb-4 lg:col-span-4 relative lg:-ml-4">
                <item-action :asset="asset" />
            </div>
        </div>
        <div class="mb-10">
            <asset-history />
        </div>
    </body-container>
</template>
