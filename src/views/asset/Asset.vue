<script setup>
import { ref, onMounted } from 'vue'
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

const asset = ref({ image_url: '/images/img10.png' })
const store = useStore();

const sale = ref(saleType.FIX_SALE);
const sellModalActive = ref(false);
const handleModal = (value) => {
    sellModalActive.value = value
}
</script>

<template>
    <nav-bar-search />
    <body-container>
        <div class="grid grid-cols-7 text-white gap-8 mt-4 lg:mt-9">
            <div class="col-span-7 md:col-span-3">
                <asset-user v-if="store.state.app.windowWidth < themeConfig.md" />
                <asset-detail :img_url="asset.image_url" />
            </div>
            <div class="col-span-7 md:col-span-4 relative">
                <asset-user v-if="store.state.app.windowWidth >= themeConfig.md" />
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
                        <div class="text-lg lg:text-2xl font-ibm-bold py-4 mr-24">More From This Collections</div>
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
    <asset-sell-modal v-model="sellModalActive" @handle-modal="handleModal" />
</template>

<style scoped>
.text-small {
    font-size: 10px;
}
</style>
