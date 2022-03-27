<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue'
import { saleType } from '@/core/config'
import NftmxModal from '@/core/components/modal/NftmxModal.vue';
import { useRoute, useRouter } from 'vue-router';
import DetailButton from '@/core/components/basic/DetailTab.vue';
import NftmxButton from '@/core/components/basic/NftmxButton.vue';
import NftmxSelectNetwork from '@/core/components/basic/NftmxSelectNetwork.vue';
import { useStore } from 'vuex';
import { keyCodeNumberRange } from '@/core/utils';
import NftmxToggle from '@/core/components/basic/NftmxToggle.vue';
import NftmxHashtag from '@/core/components/basic/NftmxHashtag.vue';
import NftmxDivider from '@/core/components/basic/NftmxDivider.vue';
import marketService from '@/core/services/market.service';
import { useToast } from "vue-toastification";
import Network from './Network.vue';
import Collection from './Collection.vue';
import { $vfm } from 'vue-final-modal'

const props = defineProps({
    asset: {
        type: Object,
        default: {}
    }
})

const store = useStore();
const route = useRoute();
const router = useRouter();
const tokenAddress = route.params.tokenAddress;
const tokenId = route.params.tokenId;
const nftPrice = ref();
const downsidePeriod = ref();
const expiration = ref();
const downsideRate = ref();
const toast = useToast();
const disabled = ref(false);

const makeOffer = async () => {
    const token_id = parseInt(tokenId);
    const price = nftPrice.value;
    const rate = downsideRate.value * 100;
    if (!price || !rate) {
        toast.error('Please fill out the fields');
        return;
    };

    disabled.value = true;
}

const preventKey = (event) => {
    if (keyCodeNumberRange(event.keyCode)) {

    } else {
        event.preventDefault();
        event.stopPropagation();
        return;
    }
}

const downsideRateRange = () => {
    if (downsideRate.value > 100) {
        downsideRate.value = 100;
    }
    if (downsideRate.value < 0) {
        downsideRate.value = 0;
    }
}
const cancel = () => {
    $vfm.hide('offerModal');
}

</script>

<template>
    <vue-final-modal
        classes="w-full flex justify-center items-center"
        name="offerModal"
        esc-to-close
        fit-parent
    >
        <div class="h-full bg-tertiary-900 text-white overflow-auto xl:w-modal-md 3xl:w-modal-big">
            <div class="text-right text-xl p-5">
                <font-awesome-icon
                    :icon="['fas', 'times']"
                    class="cursor-pointer hover:text-tertiary-400 transition"
                    @click="cancel"
                />
            </div>
            <div class="text-center relative mt-1.75">
                <div class="font-press text-xl sm:text-2xl">Make an Offer</div>
                <div
                    class="font-ibm text-tertiary-400 text-sm sm:text-lg mt-3.75"
                >APY rewards while your offer is pending</div>
            </div>
            <div class="text-white my-9 px-4 lg:px-17.25">
                <div class="relative text-lg font-ibm-medium">
                    <div class="flex mt-8">Price</div>
                    <div class="sm:flex mt-3.25 font-ibm text-sm">
                        <div class="flex flex-grow">
                            <div
                                class="bg-black flex items-center font-ibm-medium px-3.25 gap-4 w-full sm:w-32.5 h-13.5"
                            >
                                <img src="/images/currencies/i-eth.png" />WETH
                            </div>
                            <input
                                v-model="nftPrice"
                                class="focus:outline-none border-2 sm:border-l-0 h-13.5 border-black text-white placeholder-tertiary-500 bg-tertiary-700 flex-grow pl-4 font-ibm text-sm w-full sm:w-auto"
                                placeholder="Type of amount"
                                @keydown="preventKey($event)"
                            />
                        </div>
                        <div
                            class="flex items-center justify-end px-4 border-2 border-black h-13.5 sm:border-l-0 mt-4 sm:mt-0 w-full sm:w-37 text-tertiary-500 bg-tertiary-700"
                        >$0.00</div>
                    </div>
                    <div
                        class="text-11 font-ibm mt-3.75 text-right text-tertiary-400"
                    >Balance: 0.0000 WETH</div>
                    <div class="grid sm:grid-cols-2 mt-3.5 gap-6">
                        <div>
                            <div class="flex">Downside Protection</div>
                            <div class="flex mt-3.25 font-ibm text-sm">
                                <input
                                    v-model="downsideRate"
                                    class="focus:outline-none border-2 h-13.5 border-black text-white placeholder-tertiary-500 bg-tertiary-700 w-full px-6 font-ibm text-sm"
                                    placeholder="0"
                                    @keydown="preventKey($event)"
                                    @input="downsideRateRange()"
                                />
                                <div
                                    class="w-13.5 h-13.5 px-4 bg-black flex items-center justify-center"
                                >%</div>
                            </div>
                        </div>
                        <div>
                            <div class="flex">Days of Protection</div>
                            <div class="flex mt-3.25 mb-4 font-ibm text-sm">
                                <input
                                    v-model="downsidePeriod"
                                    class="focus:outline-none border-2 h-13.5 border-black text-white placeholder-tertiary-500 bg-tertiary-700 w-full px-6 font-ibm text-sm"
                                    placeholder="0"
                                    @keydown="preventKey($event)"
                                />
                                <div
                                    class="w-50 h-13.5 px-4 bg-black flex items-center justify-center font-ibm-medium"
                                >DAYS</div>
                            </div>
                        </div>
                    </div>
                    <div class="flex mt-2.25">Offer Expiration</div>
                    <div class="grid sm:grid-cols-2 gap-6">
                        <div class="flex mt-3.25 font-ibm text-sm">
                            <input
                                v-model="expiration"
                                class="focus:outline-none border-2 h-13.5 border-black text-white placeholder-tertiary-500 bg-tertiary-700 w-full px-6 font-ibm text-sm"
                                placeholder="0"
                                @keydown="preventKey($event)"
                                @input="downsideRateRange()"
                            />
                        </div>
                        <div class="flex mt-3.25 mb-4 font-ibm text-sm">
                            <input
                                class="focus:outline-none border-2 h-13.5 border-black text-white placeholder-tertiary-500 bg-tertiary-700 w-full px-6 font-ibm text-sm"
                                placeholder="0"
                                @keydown="preventKey($event)"
                            />
                        </div>
                    </div>
                    <div class="w-full mt-9 pt-0.5 pb-2.5 mb-17">
                        <nftmx-button
                            :disabled="disabled"
                            color="primary"
                            label="MAKE AN OFFER"
                            class="w-full font-press text-sm lg:text-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    </vue-final-modal>
</template>
