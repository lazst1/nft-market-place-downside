<script setup>
import Accordion from '@/core/container/Accordion.vue';
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import SidebarRouter from './SidebarRouter.vue';
import SidebarAccordion from './SidebarAccordion.vue';
import SubRouter from './SubRouter.vue';
import SidebarFooter from './SidebarFooter.vue';
import SidebarContainer from '@/core/container/SidebarContainer.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useToast } from 'vue-toastification';
import NftmxWalletAddressPop from '@/core/components/NftmxWalletAddressPop.vue';

const store = useStore();
const walletAddress = computed(() => store.getters['auth/getWalletAddress']);
const toast = useToast();

const onCopy = (e) => {
    toast.info('Wallet Address is copied', {
        position: 'top-right'
    })
}
const onError = (e) => {
    // alert('Failed to copy texts')
}
function toggleSidebar() {
    store.commit('app/TOGGLE_SIDEBAR', !store.state.app.sidebarOpened);
    store.commit('app/TOGGLE_NOTIFICATION_BAR', false);
}
</script>

<template>
    <sidebar-container>
        <div class="h-17 flex items-center cursor-pointer justify-between" @click="toggleSidebar">
            <div>
                <nftmx-wallet-address-pop
                    v-if="walletAddress"
                    class="text-base font-ibm-bold pt-1 hover:text-primary-400 transition"
                    :address="walletAddress"
                />
            </div>
            <div class="ml-6 flex flex-col gap-1 items-center">
                <div class="w-2 h-2 bg-primary-900 rounded" />
                <div class="w-1.5 h-1.5 bg-primary-900 rounded" />
                <div class="w-1 h-1 bg-primary-900 rounded" />
            </div>
        </div>
        <sidebar-router to="/profile">Profile</sidebar-router>
        <sidebar-router to="/">Create an NFT</sidebar-router>
        <sidebar-router to="/">Launch your DVC</sidebar-router>
        <sidebar-router to="/">My collection</sidebar-router>
        <sidebar-router to="/">Free license</sidebar-router>
        <sidebar-accordion name="Marketplace">
            <sub-router to="/browse">Browse</sub-router>
            <sub-router to="/">Rankings</sub-router>
            <sub-router to="/">Recently sold</sub-router>
            <sub-router to="/">Recently added</sub-router>
            <sub-router to="/">Recently canceled</sub-router>
            <sub-router to="/">Biggest sales</sub-router>
            <sub-router to="/">Ending soon</sub-router>
            <sub-router to="/">Most viewed</sub-router>
        </sidebar-accordion>
        <sidebar-accordion name="Community">
            <sub-router to="/">Help center</sub-router>
            <sub-router to="/">Suggestion</sub-router>
            <sub-router to="/">FAQ</sub-router>
            <sub-router to="/">Blog</sub-router>
        </sidebar-accordion>
        <sidebar-router to="/">Developers</sidebar-router>
        <sidebar-router to="/">Affiliate program</sidebar-router>
        <sidebar-router to="/">Docs</sidebar-router>

        <nftmx-divider class="border-tertiary-900 my-4"></nftmx-divider>

        <div class="font-ibm-semi-bold leading-9 py-0.5">
            <sidebar-router to="/">New</sidebar-router>
            <sidebar-router to="/">Art</sidebar-router>
            <sidebar-router to="/">Domain names</sidebar-router>
            <sidebar-router to="/">Virtual worlds</sidebar-router>
            <sidebar-router to="/">Trading cards</sidebar-router>
            <sidebar-router to="/">Collectibles</sidebar-router>
            <sidebar-router to="/">Sports</sidebar-router>
            <sidebar-router to="/">Utility</sidebar-router>
            <sidebar-router to="/">LootBoxes</sidebar-router>
        </div>

        <nftmx-divider class="border-tertiary-900 my-4"></nftmx-divider>

        <sidebar-accordion name="My Account">
            <sub-router to="/profile">My collections</sub-router>
            <sub-router to="/">My ledger</sub-router>
            <sub-router to="/">My offers</sub-router>
            <sub-router to="/">My referrals</sub-router>
            <sub-router to="/">Gift items</sub-router>
        </sidebar-accordion>
        <sidebar-accordion name="Company">
            <sub-router to="/">About</sub-router>
            <sub-router to="/">Join the team</sub-router>
        </sidebar-accordion>
        <sidebar-accordion name="Social media">
            <sub-router to="/">
                <div class="flex">
                    <div class="w-3 mr-4 text-center">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    </div>Facebook
                </div>
            </sub-router>
            <sub-router to="/">
                <div class="flex">
                    <div class="w-3 mr-4 text-center">
                        <font-awesome-icon :icon="['fab', 'telegram-plane']" />
                    </div>Telegram
                </div>
            </sub-router>
            <sub-router to="/">
                <div class="flex">
                    <div class="w-3 mr-4 text-center">
                        <font-awesome-icon :icon="['fab', 'discord']" />
                    </div>Discord
                </div>
            </sub-router>
            <sub-router to="/">
                <div class="flex">
                    <div class="w-3 mr-4 text-center">
                        <font-awesome-icon :icon="['fab', 'twitter']" />
                    </div>Twitter
                </div>
            </sub-router>
            <sub-router to="/">
                <div class="flex">
                    <div class="w-3 mr-4 text-center">
                        <font-awesome-icon :icon="['fab', 'medium-m']" />
                    </div>Medium
                </div>
            </sub-router>
        </sidebar-accordion>
        <div class="font-ibm-semi-bold pt-3.5">Privacy of policy</div>
        <div class="font-ibm-semi-bold">Terms of service</div>
        <div class="py-4 flex gap-6">
            <font-awesome-icon
                :icon="['fas', 'moon']"
                class="text-lg text-primary-900 cursor-pointer"
            ></font-awesome-icon>
            <font-awesome-icon
                :icon="['fas', 'sun']"
                class="text-lg text-tertiary-400 cursor-pointer"
            ></font-awesome-icon>
        </div>
        <nftmx-divider class="border-tertiary-900 my-3"></nftmx-divider>
        <sidebar-footer />
    </sidebar-container>
</template>