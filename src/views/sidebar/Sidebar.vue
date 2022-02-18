<script setup>
import Accordion from '@/core/container/Accordion.vue';
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import SidebarRouter from './SidebarRouter.vue';
import SidebarAccordion from './SidebarAccordion.vue';
import SubRouter from './SubRouter.vue';
import SidebarFooter from './SidebarFooter.vue';
</script>

<template>
    <div
        class="fixed max-h-full overflow-auto z-20 w-full sm:w-72 top-0 right-0 bg-black text-white pt-20 pl-8 pr-2 font-ibm text-xs leading-7.5"
    >
        <sidebar-router to="/profile-setting">Profile</sidebar-router>
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
            <font-awesome-icon :icon="['fas', 'moon']" class="text-lg text-primary-900 cursor-pointer"></font-awesome-icon>
            <font-awesome-icon :icon="['fas', 'sun']" class="text-lg text-tertiary-400 cursor-pointer"></font-awesome-icon>
        </div>
        <nftmx-divider class="border-tertiary-900 my-3"></nftmx-divider>
        <sidebar-footer />
    </div>
</template>