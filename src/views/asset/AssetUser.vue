<script setup>
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import NftmxWalletAddressPop from '@/core/components/NftmxWalletAddressPop.vue';

const props = defineProps({
    asset: Object
})

const store = useStore();

</script>

<template>
    <div class="pt-6 font-ibm-bold text-primary-900 text-lg">Kyle White</div>
    <div class="flex pb-6 md:pb-px items-start gap-6">
        <div class="flex-1">
            <div
                class="flex-1 flex-wrap flex text-2xl md:text-3xl font-ibm-bold mt-1.5 md:mt-1.25 pb-4.75 md:pb-8"
            >
                <div class="mr-4">{{asset.name}}</div>
            </div>
            <div class="flex text-xxs pb-3.5 md:pb-12">
                <div class="flex-1 flex flex-wrap leading-5">
                    <div>
                        Created by
                        <span class="text-primary-900">234...293</span> |&nbsp;
                    </div>
                    <div>
                        Owned by
                        <span class="text-primary-900">
                            <nftmx-wallet-address-pop
                                class="text-primary-900"
                                :address="store.state.user.walletAddress"
                            ></nftmx-wallet-address-pop>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="text:xs md:text-base text-tertiary-400 flex items-end font-ibm-light md:font-ibm-semi-bold pt-4"
        >
            <span class="px-2 leading-4">124</span>
            <font-awesome-icon
                :icon="['fas', 'thumbs-up']"
                class="text-lg md:text-2xl text-primary-900"
            />
        </div>
    </div>
</template>
