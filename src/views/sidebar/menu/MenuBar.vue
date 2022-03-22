<script setup>
import NftmxDivider from '@/core/components/basic/NftmxDivider.vue';
import MainRouter from './components/MainRouter.vue';
import Accordion from './components/Accordion.vue';
import SubRouter from './components/SubRouter.vue';
import MenuFooter from './MenuFooter.vue';
import SidebarContainer from '@/core/container/SidebarContainer.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import NftmxWalletAddressPop from '@/core/components/blockchain-address/NftmxWalletAddressPop.vue';

const store = useStore();
const walletAddress = computed(() => store.getters['auth/walletAdderss']);

const toggleSidebar = () => {
    store.commit('app/TOGGLE_MENU', !store.state.app.menuOpened);
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
        <main-router to="/profile">Profile</main-router>
        <main-router to="/">Create an NFT</main-router>
        <main-router to="/">Launch your DVC</main-router>
        <main-router to="/">My collection</main-router>
        <main-router to="/">Free license</main-router>
        <accordion name="Marketplace">
            <sub-router to="/browse">Browse</sub-router>
            <sub-router to="/">Rankings</sub-router>
            <sub-router to="/">Recently sold</sub-router>
            <sub-router to="/">Recently added</sub-router>
            <sub-router to="/">Recently canceled</sub-router>
            <sub-router to="/">Biggest sales</sub-router>
            <sub-router to="/">Ending soon</sub-router>
            <sub-router to="/">Most viewed</sub-router>
        </accordion>
        <accordion name="Community">
            <sub-router to="/">Help center</sub-router>
            <sub-router to="/">Suggestion</sub-router>
            <sub-router to="/">FAQ</sub-router>
            <sub-router to="/">Blog</sub-router>
        </accordion>
        <main-router to="/">Developers</main-router>
        <main-router to="/">Affiliate program</main-router>
        <main-router to="/">Docs</main-router>

        <nftmx-divider class="border-tertiary-900 my-4"></nftmx-divider>

        <div class="font-ibm-semi-bold leading-9 py-0.5">
            <main-router to="/">New</main-router>
            <main-router to="/">Art</main-router>
            <main-router to="/">Domain names</main-router>
            <main-router to="/">Virtual worlds</main-router>
            <main-router to="/">Trading cards</main-router>
            <main-router to="/">Collectibles</main-router>
            <main-router to="/">Sports</main-router>
            <main-router to="/">Utility</main-router>
            <main-router to="/">LootBoxes</main-router>
        </div>

        <nftmx-divider class="border-tertiary-900 my-4"></nftmx-divider>

        <accordion name="My Account">
            <sub-router to="/profile">My collections</sub-router>
            <sub-router to="/">My ledger</sub-router>
            <sub-router to="/">My offers</sub-router>
            <sub-router to="/">My referrals</sub-router>
            <sub-router to="/">Gift items</sub-router>
        </accordion>
        <accordion name="Company">
            <sub-router to="/">About</sub-router>
            <sub-router to="/">Join the team</sub-router>
        </accordion>
        <accordion name="Social media">
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
        </accordion>
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
        <menu-footer />
    </sidebar-container>
</template>
