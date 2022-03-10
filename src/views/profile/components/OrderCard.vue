<script setup>
import { computed, ref, watchEffect } from 'vue';
import NftmxCardContainer from '@/core/container/NftmxCardContainer.vue';
import CheckboxCell from '@/core/components/CheckboxCell.vue';
import TextCompression from '@/core/components/TextCompression.vue';
import { useStore } from 'vuex';
import NftmxCancelModal from '@/core/components/NftmxCancelModal.vue';
import marketService from '../../../core/services/market.service';

const props = defineProps({
    order: Object,
});
const emit = defineEmits(['handle-vote', 'hide-nft', 'cancel-order', 'approve']);

const store = useStore();
const item = computed(() => props.order);
const option = ref(false)
const metadata = computed(() => props.order.nft.metadata ? props.order.nft.metadata : {});
const openCancelModal = ref(false);

function onClickOutside() {
    option.value = false
}

function approve() {
    emit('approve', props.order);
}

const openCancel = () => {
    openCancelModal.value = true;
}
const handleVote = () => {
    emit('handle-vote', props.order);
}
const hideNFT = (hide) => {
    emit('hide-nft', props.order, hide);
}
const cancelOrder = () => {
    // emit('cancel-order', props.order);
}

</script>

<template>
    <nftmx-card-container
        :approved="order.orderStatus > -1 ? true : order.nft.approved"
        :image="metadata ? metadata.image : ''"
        @approve="approve"
    >
        <div>
            <div :class="['h-24', 'mb-0.5']">
                <div class="text-tertiary-400 text-xxs">{{ order.nft.name ? order.nft.name : '' }}</div>
                <div
                    class="text-white font-ibm-medium text-sm leading-5.25 my-0.75"
                >{{ metadata.name ? metadata.name : 'Unnamed' }}</div>
                <div class="text-tertiary-400 font-ibm-light text-xxs leading-5.25">
                    <text-compression
                        :text="metadata.description ? metadata.description : 'No description'"
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
                            <router-link
                                v-if="order.orderStatus === -1"
                                :to="{ name: 'asset', params: { tokenAddress: order.tokenAddress, tokenId: order.tokenId } }"
                                class="text-white hover:text-primary-700 cursor-pointer"
                            >List for Sale</router-link>
                            <div
                                v-if="order.orderStatus === '2' && order.buyerAddress === store.state.user.walletAddress"
                                class="text-white hover:text-primary-700 cursor-pointer"
                                @click="openCancel"
                            >Cancel buying</div>
                            <div
                                v-if="order.orderStatus === '0'"
                                class="text-white hover:text-primary-700 cursor-pointer"
                                @click="openCancel"
                            >Cancel selling</div>
                            <div class="text-white hover:text-primary-700 cursor-pointer">Copy link</div>
                            <div class="text-white hover:text-primary-700 cursor-pointer">Transfer</div>
                            <div
                                class="text-white hover:text-primary-700 cursor-pointer"
                            >Make profile picture</div>
                            <div
                                v-if="order.hiders.findIndex(id => id === store.state.user.id) === -1"
                                class="text-white hover:text-primary-700 cursor-pointer"
                                @click="hideNFT(true)"
                            >Hide</div>
                            <div
                                v-if="order.hiders.findIndex(id => id === store.state.user.id) > -1"
                                class="text-white hover:text-primary-700 cursor-pointer"
                                @click="hideNFT(false)"
                            >Unhide</div>
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
                    <span style="line-height: 0.75" class="pr-2">{{ order.votes.length }}</span>
                    <font-awesome-icon
                        :icon="['fas', 'thumbs-up']"
                        :class="[order.votes.findIndex(id => id === store.state.user.id) > -1 ? 'text-primary-900' : 'text-white', 'hover:text-primary-900 cursor-pointer']"
                        @click="handleVote()"
                    />
                </div>
            </div>
        </div>
        <nftmx-cancel-modal v-model="openCancelModal" @confirm="cancelOrder" />
    </nftmx-card-container>
</template>
