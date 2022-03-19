<script setup>
import NftmxSummaryContainer from '@/core/container/NftmxSummaryContainer.vue';
import { computed, ref, watchEffect } from 'vue';
import { useStore } from 'vuex'
import { themeConfig, baseURL, defaultUser } from '@/core/config';
import NftmxWalletAddress from '@/core/components/NftmxWalletAddress.vue';
import NftmxGroupIcon from '@/core/components/NftmxGroupIcon.vue';
import NftmxWalletAddressPop from '@/core/components/NftmxWalletAddressPop.vue';
import { useToast } from 'vue-toastification';

const store = useStore();
const toast = useToast();
const walletAddress = computed(() => store.getters['auth/getWalletAddress'])
const profileImg = ref();
const profileBanner = ref();
const name = ref();
const joinedDate = ref();
const user = computed(() => store.getters['auth/getUser']);

watchEffect(() => {
    const user = store.getters['auth/getUser'];
    profileBanner.value = user.profile_banner ? baseURL + user.profile_banner : defaultUser.profile_banner;
    profileImg.value = user.profile_img ? baseURL + user.profile_img : defaultUser.profile_img;
    name.value = user.name ? user.name : defaultUser.name;
    const joined = new Date(user.createdAt);
    joinedDate.value = joined.toLocaleString('default', { month: 'long' }) + ' ' + joined.getFullYear();
})

const onCopy = (e) => {
    toast.success('Wallet Address is copied')
}

</script>

<template>
    <nftmx-summary-container :img_url="profileBanner">
        <div class="flex">
            <div>
                <img
                    :src="profileImg"
                    class="w-30 h-30 mt-14.75 sm:mt-12.75 sm:w-50 sm:h-50 object-contain object-top"
                />
            </div>
            <div class="ml-5.75 md:ml-13 mt-17.5">
                <div
                    class="flex font-press text-md sm:text-lg md:text-3xl leading-loose text-white w-max"
                >
                    {{ name }}
                    <font-awesome-icon
                        :icon="['fas', 'edit']"
                        class="text-sm transition lg:text-lg mb-4 ml-4 cursor-pointer hover:text-primary-900"
                    />
                </div>
                <div class="flex font-ibm text-sm pb-1.5 md:pb-5 mt-5">
                    <div class="text-primary-900">
                        <nftmx-wallet-address-pop
                            :disable="store.state.app.windowWidth > themeConfig.sm"
                            :address="walletAddress"
                        />
                    </div>
                </div>
                <div
                    class="font-ibm text-11 md:text-sm mt-0.5 pb-px text-white"
                >Joined {{ joinedDate }}</div>
                <div class="mt-4.75 md:mt-4 flex">
                    <div class="flex text-sm text-white cursor-pointer">
                        <div
                            class="border transition border-black w-7.5 h-8 px-2 pt-1.25 hover:bg-primary-900 bg-tertiary-800"
                            v-clipboard:copy="walletAddress"
                            v-clipboard:success="onCopy"
                        >
                            <font-awesome-icon :icon="['fas', 'copy']" />
                        </div>

                        <a
                            :href="user.website"
                            target="_blank"
                            class="border-y transition border-r border-black w-7.5 h-8 px-2 pt-1.25 hover:bg-primary-900 bg-tertiary-800"
                        >
                            <font-awesome-icon :icon="['fas', 'globe']" />
                        </a>
                        <a
                            :href="user.twitter"
                            target="_blank"
                            class="border-y border-r transition border-black w-7.5 h-8 px-2.25 pt-1.25 hover:bg-primary-900 bg-tertiary-800"
                        >
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </a>
                        <a
                            :href="user.instagram"
                            target="_blank"
                            class="border-y border-black transition w-7.5 h-8 px-2 pt-1.25 hover:bg-primary-900 bg-tertiary-800"
                        >
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a>
                        <router-link
                            to="profile-setting"
                            class="border border-black w-8 transition h-8 px-2 pt-1.25 hover:bg-primary-900 bg-tertiary-800"
                        >
                            <font-awesome-icon :icon="['fas', 'cog']" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nftmx-summary-container>
</template>
