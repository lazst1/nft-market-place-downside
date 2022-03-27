<script setup>
import DetailButton from '@/core/components/basic/DetailTab.vue';
import Ribbon from '@/core/components/basic/Ribbon.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import Accordion from '@/core/components/accordion/BasicAccordion.vue';
import { assetDetailTabs, defaultUser } from '@/core/config'
import NftmxWalletAddressPop from '@/core/components/blockchain-address/NftmxWalletAddressPop.vue';
import { toUpercaseFirstLetterOfString } from '@/core/utils'
import { baseURL, themeConfig } from '@/core/config';
import InsideModal from '@/core/components/modal/InsideModal.vue';
import ListGroupItem from '@/core/components/basic/ListGroupItem.vue';
import ListGroupSubItem from '@/core/components/basic/ListGroupSubItem.vue';

const props = defineProps({
    percent: {
        type: Number,
        default: -1
    },
    period: {
        type: Number,
        default: -1
    },
    nft: Object,
    nftCreator: {
        type: Object,
        default: defaultUser
    }
})
const store = useStore();
const open = ref(false);
const tab = ref('Please select');

const handleClick = () => {
    open.value = !open.value
}
const selectTab = (value) => {
    tab.value = value || "Please select";
    open.value = false;
}
const cancelNFT = () => {

}
</script>

<template>
    <div
        class="relative overflow-hidden w-full h-asset-img-lg border border-black"
        :style="{ background: 'url(' + '/images/nfts/img10.png' + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#222222' }"
    >
        <ribbon v-if="percent > -1" :percent="percent" :period="period" big />
        <inside-modal
            :title="toUpercaseFirstLetterOfString(tab)"
            v-if="tab === assetDetailTabs[0]"
            @select-tab="selectTab"
        >
            <div class="text-11">
                Created by
                <nftmx-wallet-address-pop
                    class="text-primary-900"
                    :address="nftCreator.walletAddress"
                />
            </div>
            <div class="text-11 text-tertiary-500 mt-4">
                {{
                    nftCreator.bio || '3D CryptoPunks only 100 different Punks will be available. Supply for each Punks: 1/1'
                }}
            </div>
        </inside-modal>
        <inside-modal
            :title="toUpercaseFirstLetterOfString(tab)"
            v-if="tab === assetDetailTabs[1]"
            @select-tab="selectTab"
        >
            <div class="flex gap-6 items-start">
                <img
                    :src="nftCreator.profile_img ? baseURL + nftCreator.profile_img : defaultUser.profile_img"
                    class="w-21 h-21 object-cover"
                />
                <div class="text-11 text-tertiary-500 leading-5">
                    {{
                        nftCreator.bio || '3D CryptoPunks only 100 different Punks will be available. Supply for each Punks: 1/1'
                    }}
                </div>
            </div>
            <div class="mt-6.5 flex gap-6 items-center">
                <div class="flex gap-4">
                    <font-awesome-icon :icon="['fas', 'user']" class="text-primary-900 text-sm" />
                    <span class="text-11">Activity</span>
                </div>
                <div class="flex gap-4">
                    <font-awesome-icon :icon="['fab', 'twitter']" class="text-primary-900 text-sm" />
                    <span class="text-11">Twitter</span>
                </div>
            </div>
        </inside-modal>
        <inside-modal
            :title="toUpercaseFirstLetterOfString(tab)"
            v-if="tab === assetDetailTabs[2]"
            @select-tab="selectTab"
        >
            <div class="text-11 flex justify-between">
                <span class="font-ibm-medium">Contract Address</span>
                <nftmx-wallet-address-pop class="text-primary-900" :address="nft.tokenAddress" />
            </div>
            <div class="text-11 flex justify-between mt-4">
                <span class="font-ibm-medium">Token ID</span>
                <span>{{ nft.tokenId }}</span>
            </div>
            <div class="text-11 flex justify-between mt-4">
                <span class="font-ibm-medium">Blockchain</span>
                <span>BSC Testnet</span>
            </div>
        </inside-modal>
        <inside-modal
            :title="toUpercaseFirstLetterOfString(tab)"
            v-if="tab === assetDetailTabs[3]"
            @select-tab="selectTab"
        >
            <div class="h-full flex flex-col justify-around text-center">
                <div
                    class="text-lg 3xl:text-2xl font-ibm-bold 3xl:leading-9"
                >Your Investment Automatically Includes 100% Downside Protection for 365 days</div>
                <div
                    class="text-tertiary-500 text-sm 3xl:leading-6"
                >If you are a buyer, think of NFT.mx as a new strategic staking program with upside from selling the NFT, while also providing the option to cancel your investment and get a 100% refund with your original tokens.</div>
                <div class="flex flex-col gap-6" v-if="period > -1">
                    <div class="flex justify-around">
                        <div class="text-center">
                            <div class="font-ibm-bold text-lg">Days left</div>
                            <div
                                class="text-3.5xl text-primary-800 -mt-0.75"
                            >{{ period + '/' + period }}</div>
                        </div>
                        <div class="text-center">
                            <div class="font-ibm-bold text-lg">Protection</div>
                            <div class="text-3.5xl text-primary-800 -mt-0.75">{{ percent }}%</div>
                        </div>
                    </div>
                </div>
            </div>
        </inside-modal>
    </div>
    <div class="mt-4 mb-8 items-center">
        <div :class="['relative flex w-full text-sm font-ibm items-baseline']">
            <div v-if="store.state.app.windowWidth >= 1920" class="flex-1 flex px-5">
                <list-group-item
                    v-for="(name, i) in assetDetailTabs"
                    :key="i"
                    @click="selectTab(name === tab ? 'Please select' : name)"
                    :active="name === tab"
                >{{ name }}</list-group-item>
            </div>
            <accordion
                v-if="store.state.app.windowWidth < themeConfig.xl3"
                :border="false"
                :sidebar="true"
                v-model="open"
                @handle-click="handleClick"
                :handleEmit="true"
                class="top-0 width"
            >
                <template v-slot:caption>
                    <list-group-item class="text-sm pt-1.5">{{ tab }}</list-group-item>
                </template>
                <list-group-sub-item
                    v-for="(name, i) in assetDetailTabs"
                    :key="i"
                    @click="selectTab(name === tab ? 'Please select' : name)"
                    :active="name === tab"
                >{{ name }}</list-group-sub-item>
            </accordion>
            <div class="flex-1"></div>
            <div class="flex object-right">
                <div
                    class="border border-black transition w-8 h-8 px-2.25 pt-1.25 hover:bg-primary-900 bg-tertiary-800 cursor-pointer"
                >
                    <font-awesome-icon :icon="['fas', 'undo']" />
                </div>
                <div
                    class="border-y border-r border-black transition w-8 h-8 px-2.25 pt-1.25 hover:bg-primary-900 bg-tertiary-800 cursor-pointer"
                >
                    <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                </div>
                <div
                    class="border-y border-black transition w-8 h-8 px-2.25 pt-1.25 hover:bg-primary-900 bg-tertiary-800 cursor-pointer"
                >
                    <font-awesome-icon :icon="['fas', 'share-alt']" />
                </div>
                <div
                    class="border border-black transition w-8 h-8 px-2.25 pt-1.25 hover:bg-primary-900 bg-tertiary-800 cursor-pointer"
                >
                    <font-awesome-icon :icon="['fas', 'bars']" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.width {
    width: calc(100% - theme("spacing[40]"));
}
</style>
