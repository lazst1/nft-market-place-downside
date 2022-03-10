<script setup>
import DetailButton from '@/core/components/DetailButton.vue';
import Ribbon from '@/core/components/Ribbon.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import Accordion from '../../core/container/Accordion.vue';
import { assetDetailTabs, defaultUser } from '@/core/config'
import InfoModal from './components/InfoModal.vue'
import NftmxWalletAddressPop from '../../core/components/NftmxWalletAddressPop.vue';
import { toUpercaseFirstLetterOfString } from '@/core/utils'
import { baseURL } from '@/core/config';

const props = defineProps({
    percent: {
        type: Number,
        default: 100
    },
    period: {
        type: Number,
        default: 365
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
        class="relative overflow-hidden p-6 w-full h-asset-img-lg border border-black"
        :style="{ background: 'url(' + '/images/img10.png' + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#222222' }"
    >
        <ribbon :percent="percent" :period="period" big />
        <info-modal
            :title="toUpercaseFirstLetterOfString(tab)"
            v-if="tab === assetDetailTabs[0]"
            @select-tab="selectTab"
        >
            <div class="text-xxs">
                Created by
                <nftmx-wallet-address-pop
                    class="text-primary-900"
                    :address="nftCreator.walletAddress"
                />
            </div>
            <div class="text-xxs text-tertiary-500 mt-4">
                {{
                    nftCreator.bio || '3D CryptoPunks only 100 different Punks will be available. Supply for each Punks: 1/1'
                }}
            </div>
        </info-modal>
        <info-modal
            :title="toUpercaseFirstLetterOfString(tab)"
            v-if="tab === assetDetailTabs[1]"
            @select-tab="selectTab"
        >
            <div class="flex gap-6 items-start">
                <img
                    :src="nftCreator.profile_img ? baseURL + nftCreator.profile_img : defaultUser.profile_img"
                    class="w-21 h-21 object-cover"
                />
                <div class="text-xxs text-tertiary-500 leading-5">
                    {{
                        nftCreator.bio || '3D CryptoPunks only 100 different Punks will be available. Supply for each Punks: 1/1'
                    }}
                </div>
            </div>
            <div class="mt-6.5 flex gap-6 items-center">
                <div class="flex gap-4">
                    <font-awesome-icon :icon="['fas', 'user']" class="text-primary-900 text-sm" />
                    <span class="text-xxs">Activity</span>
                </div>
                <div class="flex gap-4">
                    <font-awesome-icon :icon="['fab', 'twitter']" class="text-primary-900 text-sm" />
                    <span class="text-xxs">Twitter</span>
                </div>
            </div>
        </info-modal>
        <info-modal
            :title="toUpercaseFirstLetterOfString(tab)"
            v-if="tab === assetDetailTabs[2]"
            @select-tab="selectTab"
        >
            <div class="text-xxs flex justify-between">
                <span class="font-ibm-medium">Contract Address</span>
                <nftmx-wallet-address-pop class="text-primary-900" :address="nft.token_address" />
            </div>
            <div class="text-xxs flex justify-between mt-4">
                <span class="font-ibm-medium">Token ID</span>
                <span>{{ nft.token_id }}</span>
            </div>
            <div class="text-xxs flex justify-between mt-4">
                <span class="font-ibm-medium">Blockchain</span>
                <span>BSC Testnet</span>
            </div>
        </info-modal>
        <info-modal
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
                <div class="flex flex-col gap-6">
                    <div class="flex justify-around">
                        <div class="text-center">
                            <div class="font-ibm-bold text-lg">Days left</div>
                            <div class="text-3.5xl text-primary-800 -mt-0.75">{{period}}/{{period}}</div>
                        </div>
                        <div class="text-center">
                            <div class="font-ibm-bold text-lg">Protection</div>
                            <div class="text-3.5xl text-primary-800 -mt-0.75">{{ percent }}%</div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <span
                        class="text-xxs text-red-600 cursor-pointer hover:text-red-700 transition"
                        @click="cancelNFT()"
                    >Cancel NFT investment</span>
                </div>
            </div>
        </info-modal>
    </div>
    <div class="mt-4 mb-8 items-center">
        <div
            :class="[open ? 'h-30' : 'h-0', 'relative flex w-full text-sm font-ibm items-baseline']"
        >
            <div v-if="store.state.app.windowWidth >= 1920" class="flex-1 flex px-5">
                <detail-button
                    v-for="(name, i) in assetDetailTabs"
                    :key="i"
                    @click="selectTab(name === tab ? 'Please select' : name)"
                    :active="name === tab"
                >{{ name }}</detail-button>
            </div>
            <accordion
                v-if="store.state.app.windowWidth < 1920"
                :border="false"
                :sidebar="true"
                v-model="open"
                @handle-click="handleClick"
                :handleEmit="true"
                class="absolute top-0 width"
            >
                <template v-slot:caption>
                    <detail-button class="text-sm pt-1.5 font-ibm-light">{{ tab }}</detail-button>
                </template>
                <detail-button
                    v-for="(name, i) in assetDetailTabs"
                    :key="i"
                    @click="selectTab(name === tab ? 'Please select' : name)"
                    :active="name === tab"
                >{{ name }}</detail-button>
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
