<script setup>
import { computed, ref } from 'vue';
import NftmxCardContainer from '@/core/container/NftmxCardContainer.vue';
import CheckboxCell from '@/core/components/CheckboxCell.vue';
import TextCompression from '@/core/components/TextCompression.vue';
import { useStore } from 'vuex';
import NftmxCancelModal from '@/core/components/NftmxCancelModal.vue';

const props = defineProps({
    order: Object
});

const store = useStore();
const item = props.order.nft;
const option = ref(false)
const metadata = item.metadata ? JSON.parse(item.metadata) : {};
const openCancelModal = ref(false);

function onClickOutside() {
    option.value = false
}

function approve() {
    store.dispatch('market/approve', { contractAddress: item.token_address, tokenId: item.token_id })
}

const openCancel = () => {
    openCancelModal.value = true;
}

function cancelOrder() {
    store.dispatch('market/cancelOrderBySeller', props.order.orderId )
}

</script>

<template>
    <nftmx-card-container
        :approved="true"
        :image="metadata ? metadata.image : ''"
        @approve="approve"
    >
        <div>
            <div :class="['h-24', 'mb-0.5']">
                <div class="text-tertiary-400 text-xxs">{{ item.name ? item.name : '' }}</div>
                <div
                    class="text-white font-ibm-medium text-sm leading-5.25 my-0.75"
                >{{ metadata.name ? metadata.name : '' }}</div>
                <div class="text-tertiary-400 font-ibm-light text-xxs leading-5.25">
                    <text-compression
                        :text="metadata.description ? metadata.description : ''"
                        :length="40"
                    />
                </div>
            </div>
            <div class="flex items-center font-ibm-semi-bold mt-1">
                <div class="text-sm flex flex-1 items-center">
                    <div class="relative">
                        <div
                            @click.prevent
                            v-show="option"
                            class="absolute w-52 bottom-5 -ml-5 px-5.5 py-3.25 bg-black text-white hover:text-primary-900 leading-9.5 font-ibm-light text-xs"
                        >
                            <div
                                v-if="order.orderStatus === '0'"
                                class="text-white hover:text-primary-700 cursor-pointer"
                                @click="openCancel"
                            >Cancel selling</div>
                            <div class="text-white hover:text-primary-700 cursor-pointer">Copy link</div>
                            <div class="text-white hover:text-primary-700 cursor-pointer">Transfer</div>
                            <div class="text-white hover:text-primary-700 cursor-pointer">Make profile picture</div>
                            <div class="text-white hover:text-primary-700 cursor-pointer">Hide</div>
                            <div class="text-white hover:text-primary-700 cursor-pointer">Unbundle</div>
                        </div>
                    </div>
                    <div
                        v-click-outside="onClickOutside"
                        @click="option = !option"
                        @click.prevent
                        class="pr-3 mr-px text-white hover:text-primary-900 text-lg cursor-pointer"
                    >
                        <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
                    </div>
                    <checkbox-cell @click.stop border="border-tertiary-500" small>
                        <span class="text-xs relative text-tertiary-500 -ml-2">Sell</span>
                    </checkbox-cell>
                </div>
                <div class="text-xs text-tertiary-500 flex items-end font-ibm-medium">
                    <span style="line-height: 0.75" class="pr-2">0</span>
                    <font-awesome-icon
                        @click.prevent
                        :icon="['fas', 'thumbs-up']"
                        class="text-white hover:text-primary-900"
                    />
                </div>
            </div>
        </div>
        <nftmx-cancel-modal v-model="openCancelModal" @confirm="cancelOrder" />
    </nftmx-card-container>
</template>
