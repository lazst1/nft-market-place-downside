<template>
    <div
        class="bg-[url('/images/hero-image-1920.png')] bg-no-repeat bg-cover bg-right font-press text-xl lg:text-4xl leading-relaxed text-white py-32 2xl:py-32 px-5.5 sm:px-10 md:px-16 lg:px-24"
    >
        <div class="mt-1.25 mb-5">
            Buy NFTs with 100%
            <br />Downside Protection
        </div>
        <div class="pt-0.75 mb-6 pb-0.5">
            <nftmx-button
                to="home"
                color="secondary"
                label="EXPLORE"
                class="font-press w-full max-w-md text-sm h-15 mr-px"
            />
            <nftmx-button
                color="primary"
                label="CREATE"
                class="font-press w-full max-w-md text-sm h-15 sm:ml-11"
            />
        </div>
    </div>
    <body-container :padding="false">
        <div class="bg-black text-white pt-24 pb-2.5">
            <div class="font-press text-3xl text-center pt-0.75">Downside Protection</div>
            <div class="grid grid-cols-2 px-4 lg:px-22 gap-10 text-center pt-12 pb-14">
                <div class="py-0.5 col-span-2 sm:col-span-1">
                    <div class="text-2xl font-ibm-bold">For Buyer</div>
                    <div
                        class="text-tertiary-500 py-7 mt-px"
                    >If you are a buyer, think of NFT.mx as a new strategic staking program with upside from selling the NFT, while also providing the option to cancel your investment and get a 100% refund with your original tokens.</div>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <div class="text-2xl font-ibm-bold">For Seller</div>
                    <div
                        class="text-tertiary-500 py-7"
                    >If you are a seller, NFT.mx allows you to increase your success rate by offering buyers downside protection all while gaining profits from the APY in leveraging other people's money.</div>
                </div>
            </div>
        </div>
        <div class="pt-24 pb-22">
            <div class="font-press text-3xl text-center pt-1.5 pb-10 text-white">Syndication</div>
            <nftmx-carousel></nftmx-carousel>
        </div>

        <div class="py-24 bg-black mt-1">
            <div
                class="font-press text-3xl text-center pt-1 pb-10 text-white"
            >Create and Sell Your NFTs</div>
            <div class="grid grid-cols-1 lg:grid-cols-4 px-4 lg:px-22 gap-10 text-center">
                <div class="flex flex-col items-center px-1">
                    <img src="/images/free-whitelabel.png" class="py-5" />
                    <div class="text-white font-ibm-medium text-lg py-3">Set up your wallet</div>
                    <div class="text-tertiary-400 font-ibm text-description">
                        Once you've set up your wallet of choice, connect it to Opensea by clicking the wallet icon in the top right corner. Learn about the
                        <span class="text-primary-900">wallets we support</span>.
                    </div>
                </div>
                <div class="flex flex-col items-center px-1">
                    <img src="/images/display-us.png" class="py-5" />
                    <div class="text-white font-ibm-medium text-lg py-3">Create your collection</div>
                    <div class="text-tertiary-400 font-ibm text-description">
                        Click
                        <span class="text-primary-900">My Collections</span> and set up your collection.
                        Add social links, a description, profile & banner images, and set a secondary sales fee.
                    </div>
                </div>
                <div class="flex flex-col items-center px-1">
                    <img src="/images/become-an-affiliate.png" class="py-5" />
                    <div class="text-white font-ibm-medium text-lg py-3">Add your NFTs</div>
                    <div
                        class="text-tertiary-400 font-ibm text-description"
                    >Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</div>
                </div>
                <div class="flex flex-col items-center px-1 text-center">
                    <img src="/images/become-an-affiliate.png" class="py-5" />
                    <div class="text-white font-ibm-medium text-lg py-3">List them for sale</div>
                    <div
                        class="text-tertiary-400 font-ibm text-description"
                    >Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</div>
                </div>
            </div>
        </div>

        <div class="pt-24 pb-22">
            <div class="font-press text-3xl text-center pt-1 pb-10 text-white">Top Decentralized VCs</div>
        </div>
    </body-container>
    <nftmx-footer :devs="true" />
</template>

<script>
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxCarousel from '@/core/components/NftmxCarousel.vue';
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import NftmxHelp from '@/core/components/NftmxHelp.vue';
import NftmxPrice from '@/core/components/NftmxPrice.vue';
import NavBarSearchInput from '@/core/components/NavBarSearchInput.vue';
import Icon from '@/core/components/Icon.vue'
import NftmxButton from '@/core/components/NftmxButton.vue';
import CheckboxCell from '@/core/components/CheckboxCell.vue';
import Accordion from '@/core/container/Accordion.vue';
import NftmxSaleCard from '@/core/components/NftmxSaleCard.vue';
import { defineComponent } from 'vue';
import NftmxCardsAccordion from '@/core/components/NftmxCardsAccordion.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import NftmxTooltip from '@/core/components/NftmxTooltip.vue';
import NftmxAnalyzer from '@/core/components/NftmxAnalyzer.vue';
import NftmxButtonSlot from '@/core/components/NftmxButtonSlot.vue';
import NftmxSelect from '@/core/components/NftmxSelect.vue';

export default defineComponent({
    components: {
        BodyContainer,
        NftmxCarousel,
        NftmxDivider,
        NftmxHelp,
        NftmxPrice,
        NavBarSearchInput,
        Icon,
        NftmxButton,
        CheckboxCell,
        Accordion,
        NftmxSaleCard,
        NftmxCardsAccordion,
        NftmxFooter,
        NftmxTooltip,
        NftmxAnalyzer,
        NftmxButtonSlot,
        NftmxSelect
    },
    data() {
        return {
            filterActive: false,
            filterBy: 'collection'
        }
    },
    computed: {
        user() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        clickFilter() {
            this.filterActive = !this.filterActive;
        },
        clickFilterBy(value) {
            this.filterBy = value;
        }
    }
})

</script>
