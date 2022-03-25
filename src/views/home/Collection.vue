<script setup>
import Accordion from '@/core/components/accordion/BasicAccordion.vue';
import NftmxSaleCard from '@/core/components/cards/NftmxSaleCard.vue';
import { useStore } from 'vuex';
import { computed, onMounted, ref, watchEffect } from 'vue';
import marketService from '@/core/services/market.service';
import OpenseaAssetCard from '@/core/components/cards/OpenseaAssetCard.vue';
import { themeConfig } from '@/core/config';
import NftmxDivider from '@/core/components/basic/NftmxDivider.vue';

const props = defineProps({
    collection: Object
});

const store = useStore();
const windowWidth = computed(() => store.state.app.windowWidth);
const open = ref(true);
const orders = ref([]);
const loading = ref(true);
const allAssets = ref({ assets: [], next: '', previous: '' });
const assets = ref([]);
const offset = ref(0);
const limit = ref(2);
const more = computed(() => allAssets.value.assets.length > 0 && assets.value.length < allAssets.value.assets.length);

const retrieveAssets = (init) => {
    marketService.getOpenseaAssetsFromCollection({ collection: props.collection.slug, cursor: allAssets.value.next }).then(res => {
        console.log(res);
        loading.value = false;
        allAssets.value = {
            assets: [
                ...allAssets.value.assets,
                ...res.data.assets
            ],
            next: res.data.next,
            previous: res.data.previous
        };
        if (init) {
            loadMoreAssets(init);
        }
    })
}

onMounted(() => {
    retrieveAssets(true);
})

const loadMoreAssets = (init) => {
    const missed = limit.value - assets.value.length % limit.value;
    const sliceLimit = init ? limit.value : limit.value * 3 + missed;
    assets.value = assets.value.concat(allAssets.value.assets.slice(offset.value, offset.value + sliceLimit));
    offset.value += sliceLimit;
    if (!init && allAssets.value.next) {
        retrieveAssets();
    }
}
const setLimitValue = (value) => {
    limit.value = value;
}
watchEffect(() => {
    if (windowWidth.value >= themeConfig.xl3) {
        if (limit.value !== 5) {
            setLimitValue(5);
        }
    } else if (windowWidth.value >= themeConfig.xl2) {
        if (limit.value !== 4) {
            setLimitValue(4);
        }
    } else if (windowWidth.value >= themeConfig.xl) {
        if (limit.value !== 3) {
            setLimitValue(3);
        }
    } else if (windowWidth.value >= themeConfig.lg) {
        if (limit.value !== 2) {
            setLimitValue(2);
        }
    } else {
        if (limit.value !== 1) {
            setLimitValue(1);
        }
    }
})
</script>

<template>
    <div class="-mx-4">
        <accordion :border="false" :bIcon="true">
            <template v-slot:caption>
                <div class="flex items-center w-full">
                    <div class="flex-1 text-sm font-press pt-2.75 pb-5 mr-4">{{ collection.name }}</div>
                </div>
            </template>
            <div class="px-4 pt-2 pb-4">
                <div
                    class="grid gap-4.5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5"
                >
                    <opensea-asset-card v-for="(asset, index) in assets" :key="index" :asset="asset" />
                    <!-- <nftmx-sale-card v-for="(order, index) in orders" :data="order" :key="index"></nftmx-sale-card> -->
                </div>
                <div
                    v-if="loading"
                    class="h-96 flex justify-center items-center font-ibm-bold text-tertiary-500 text-lg"
                >Loading...</div>
                <div
                    v-if="!loading && allAssets.assets.length === 0"
                    class="h-96 flex justify-center items-center font-ibm-bold text-tertiary-500 text-lg"
                >No NFTs found</div>
            </div>
            <div
                v-if="more"
                class="text-sm text-right px-6 text-primary-900 font-ibm-medium"
                @click="loadMoreAssets()"
            >
                <span class="cursor-pointer">See More</span>
            </div>
        </accordion>
    </div>
    <nftmx-divider class="mt-8.5 mb-6" />
</template>
