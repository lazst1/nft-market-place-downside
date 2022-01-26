<script setup>
import NftmxSummaryContainer from '@/core/container/NftmxSummaryContainer.vue';
import { computed, ref, reactive, onMounted } from 'vue';
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import NftmxWalletAddress from '@/core/components/NftmxWalletAddress.vue';
import NftmxGroupIcon from '@/core/components/NftmxGroupIcon.vue';

const store = useStore();
const walletAddress = computed(() => store.getters['auth/getWalletAddress'])

</script>

<template>
    <nftmx-summary-container img_url="/images/profile-banner-1920.png">
        <div class="flex">
            <div>
                <img
                    src="/images/profile-big.png"
                    class="w-30 h-30 mt-14.75 sm:mt-10.25 sm:w-50 sm:h-50 object-contain object-top"
                />
            </div>
            <div class="ml-5.75 md:ml-13 pt-13 sm:pt-14 mt-px">
                <div
                    class="mb-1.75 font-press text-md sm:text-lg md:text-3xl leading-loose text-white"
                >Kyle White</div>
                <div class="font-ibm text-sm pb-1.5 md:pb-5 text-primary-900">
                    <nftmx-wallet-address
                        :disable="store.state.app.windowWidth > themeConfig.sm"
                        :address="walletAddress"
                    />
                </div>
                <div
                    class="font-ibm text-xxs md:text-sm mt-0.75 pb-px text-white"
                >Joined January 2022</div>
                <div class="mt-4.75 md:mt-4">
                    <nftmx-group-icon />
                </div>
            </div>
        </div>
    </nftmx-summary-container>
</template>
