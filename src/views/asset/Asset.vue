<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';
import Accordion from '@/core/container/Accordion.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import CardsContainer from '@/core/container/CardsContainer.vue';
import NftmxItemCard from '@/core/components/NftmxItemCard.vue';
import { saleType } from '@/core/config'
import { useStore } from 'vuex';
import AssetDetail from './AssetDetail.vue';
import AssetStatistics from './AssetStatistics.vue';
import AssetUser from './AssetUser.vue';
import { themeConfig } from '@/core/config';
import NavBarSearch from '@/core/container/NavBarSearch.vue';
import Ledger from './Ledger.vue';
import AssetSellModal from './AssetSellModal.vue';
import { useRoute, useRouter } from 'vue-router';
import moralisService from '@/core/services/moralis.service';
import MoreInfo from '../detail/MoreInfo.vue';
import marketService from '../../core/services/market.service';
import authService from '../../core/services/auth.service';

const store = useStore();
const router = useRouter();
const route = useRoute();
const tokenAddress = route.params.tokenAddress;
const tokenId = route.params.tokenId;
const asset = ref({});
const sale = ref(saleType.FIX_SALE);
const sellModalActive = ref(false);
const nftCreator = ref({});

watchEffect(() => {
    if (tokenAddress && tokenId) {
        moralisService.getNft(tokenAddress, tokenId).then(res => {
            asset.value = res;
        })
        moralisService.nftTransfers(tokenAddress, tokenId).then(res => {
            const creatorAddress = res.result[res.result.length - 1].to_address;
            authService.connectWallet(creatorAddress).then(res => {
                nftCreator.value = res;
            })
        })
    }
})

const handleModal = (value) => {
    sellModalActive.value = value
}
</script>

<template>
    <nav-bar-search />
    <body-container>
        <div class="grid grid-cols-7 text-white gap-8 mt-4 lg:mt-9">
            <div class="col-span-7 lg:col-span-3">
                <asset-user v-if="store.state.app.windowWidth < themeConfig.lg" :asset="asset" />
                <asset-detail :nft="asset" :nftCreator="nftCreator" />
                <!-- <more-info :nft="asset" :percent="0" :period="0" :nftCreator="nftCreator" /> -->
            </div>
            <div class="col-span-7 lg:col-span-4 relative">
                <asset-user v-if="store.state.app.windowWidth >= themeConfig.lg" :asset="asset" />
                <div class="mt-px">
                    <asset-statistics v-model="sellModalActive" @handle-modal="handleModal" />
                </div>
            </div>
        </div>
        <ledger />
        <div class="mt-7 mb-10">
            <accordion :accordion="false" :border="false" :sidebar="true">
                <template v-slot:caption>
                    <div class="flex items-center">
                        <div
                            class="text-lg lg:text-2xl font-ibm-bold py-4 mr-24"
                        >More From This Collections</div>
                    </div>
                </template>

                <!-- <cards-container class="mt-2 mb-2 place-items-center">
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                </cards-container>-->
            </accordion>
        </div>
        <div class="text-center pt-px mb-12">
            <nftmx-button
                outline
                color="primary"
                label="VIEW COLLECTIONS"
                class="font-ibm-bold px-0.5 sm:px-17 lg:text-lg pt-2.5 pb-3 text-primary-900"
            />
        </div>
    </body-container>
    <nftmx-footer />
    <asset-sell-modal :asset="asset" v-model="sellModalActive" @handle-modal="handleModal" />
</template>

<style scoped>
.text-small {
    font-size: 10px;
}
</style>
