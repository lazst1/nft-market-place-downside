<script setup>
import NftmxSummaryContainer from '@/core/container/NftmxSummaryContainer.vue';
import { computed, ref, reactive, onMounted } from 'vue';
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import NftmxWalletAddress from '@/core/components/NftmxWalletAddress.vue';
import NftmxGroupIcon from '@/core/components/NftmxGroupIcon.vue';
import NftmxWalletAddressPop from '../../core/components/NftmxWalletAddressPop.vue';

const store = useStore();
const walletAddress = computed(() => store.getters['auth/getWalletAddress'])

</script>

<template>
    <nftmx-summary-container img_url="/images/profile-banner-1920.png">
        <div class="flex">
            <div>
                <img
                    src="/images/profile-big.png"
                    class="w-30 h-30 mt-14.75 sm:mt-12.75 sm:w-50 sm:h-50 object-contain object-top"
                />
            </div>
            <div class="ml-5.75 md:ml-13 mt-17.5">
                <div
                    class="flex font-press text-md sm:text-lg md:text-3xl leading-loose text-white w-max"
                >
                    Kyle White
                    <font-awesome-icon :icon="['fas', 'edit']" class="text-sm lg:text-lg mb-4 ml-4 cursor-pointer hover:text-primary-900" />
                </div>
                <div class="flex font-ibm text-sm pb-1.5 md:pb-5 mt-5">
                    <div class="text-primary-900">
                        <nftmx-wallet-address-pop
                            :disable="store.state.app.windowWidth > themeConfig.sm"
                            :address="walletAddress"
                        />
                    </div>
                    <font-awesome-icon
                        :icon="['fas', 'edit']"
                        class="text-sm lg:text-lg text-white ml-5 mt-0.5 cursor-pointer hover:text-primary-900"
                    />
                </div>
                <div class="font-ibm text-xxs md:text-sm mt-0.5 pb-px text-white">
                    Joined January 2022
                    <font-awesome-icon :icon="['fas', 'edit']" class="text-sm lg:text-lg ml-4 cursor-pointer hover:text-primary-900" />
                </div>
                <div class="mt-4.75 md:mt-4 flex">
                    <nftmx-group-icon />
                    <font-awesome-icon
                        :icon="['fas', 'edit']"
                        class="text-white text-sm lg:text-lg mt-2 ml-6 cursor-pointer hover:text-primary-900"
                    />
                </div>
            </div>
        </div>
    </nftmx-summary-container>
</template>
