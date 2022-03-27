<script setup>
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import NftmxWalletAddressPop from '@/core/components/blockchain-address/NftmxWalletAddressPop.vue';
import marketService from '@/core/services/market.service';
import { ref, watchEffect } from 'vue';
import moralisService from '@/core/services/moralis.service';

const props = defineProps({
    asset: Object,
})

const store = useStore();
const votes = ref([]);
const nftCreator = ref('');

watchEffect(() => {
    if (props.asset && props.asset.token_address) {
        marketService.getTokenInfo(props.asset.token_address, props.asset.token_id).then(res => {
            votes.value = res.data.votes || [];
        });
        moralisService.nftTransfers(props.asset.token_address, props.asset.token_id).then(res => {
            nftCreator.value = res.data.result[res.data.result.length-1].to_address;
        })
    }
})

const handleVote = () => {
    const userIndex = votes.value.findIndex(id => id === store.state.user.id);
    if (userIndex > -1) {
        marketService.cancelVote(props.asset.token_address, props.asset.token_id, store.state.user.id).then(res => {
            votes.value.splice(userIndex, 1);
        })
    } else {
        marketService.vote(props.asset.token_address, props.asset.token_id, store.state.user.id).then(res => {
            votes.value.push(store.state.user.id);
        })
    }
}
</script>

<template>
    <div class="pt-6 font-ibm-bold text-primary-900 text-lg">Kyle White</div>
    <div class="flex pb-6 md:pb-px items-start gap-6">
        <div class="flex-1">
            <div
                class="flex-1 flex-wrap flex text-2xl md:text-3xl font-ibm-bold mt-1.5 md:mt-1.25 pb-4.75 md:pb-8"
            >
                <div class="mr-4">{{ asset.name }}</div>
            </div>
            <div class="flex text-11 pb-3.5 md:pb-12">
                <div class="flex-1 flex flex-wrap leading-5">
                    <div>
                        Created by
                        <span class="text-primary-900">
                            <nftmx-wallet-address-pop
                                class="text-primary-900"
                                :address="nftCreator"
                            ></nftmx-wallet-address-pop>
                        </span> |&nbsp;
                    </div>
                    <div>
                        Owned by
                        <span class="text-primary-900">
                            <nftmx-wallet-address-pop
                                class="text-primary-900"
                                :address="store.getters['auth/walletAddress']"
                            ></nftmx-wallet-address-pop>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="text:xs md:text-base text-tertiary-400 flex items-end font-ibm-light md:font-ibm-semi-bold pt-4"
        >
            <span class="px-2 leading-4">{{ votes.length }}</span>
            <font-awesome-icon
                :icon="['fas', 'thumbs-up']"
                :class="[votes.findIndex(id => id === store.state.user.id) > -1 ? 'text-primary-900' : 'text-white', 'hover:text-primary-900 cursor-pointer text-lg md:text-2xl']"
                @click="handleVote()"
            />
        </div>
    </div>
</template>
