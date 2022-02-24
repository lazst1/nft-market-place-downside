<script setup>
import NftmxTypography from '@/core/components/NftmxTypography.vue';

defineProps({
    devs: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="bottom-0 w-full font-ibm">
        <div class="bg-black text-white pt-5.25 pb-8 border-b border-tertiary-800 px-8">
            <p
                class="text-center text-sm sm:text-xg text-primary-900 font-press leading-6 sm:leading-9"
            >NFT.mx is a fully decentralized protocol</p>
            <p
                class="text-center text-sm"
            >All generated fees and gas costs are 100% reimbursed with the NFTmx token</p>
        </div>
        <div v-if="devs" class="bg-tertiary-900 text-center pt-12">
            <div class="max-w-screen-3xl mx-auto pb-28">
                <div class="text-white font-press px-4 pt-10 pb-2 sm:pb-6 lg:pb-16">
                    <nftmx-typography h1>For developers and marketers</nftmx-typography>
                </div>
                <div
                    class="grid grid-cols-1 lg:grid-cols-3 px-5.5 sm:px-10 md:px-16 lg:px-22 sm:gap-10 lg:gap-32"
                >
                    <div class="flex flex-col items-center px-1">
                        <img src="/images/free-whitelabel.png" class="py-5" />
                        <div class="text-white font-ibm-medium text-lg py-3">Free Whitelabel</div>
                        <div
                            class="text-tertiary-400 font-ibm text-xm"
                        >Build for FREE your own NFT.mx under a new brand and enjoy from sale fees</div>
                    </div>
                    <div class="flex flex-col items-center px-1">
                        <img src="/images/display-us.png" class="py-5" />
                        <div class="text-white font-ibm-medium text-lg py-3">Display us</div>
                        <div
                            class="text-tertiary-400 font-ibm text-xm"
                        >Use our API to display NFT on you website and enjoy from sale fees</div>
                    </div>
                    <div class="flex flex-col items-center px-1">
                        <img src="/images/become-an-affiliate.png" class="py-5" />
                        <div class="text-white font-ibm-medium text-lg py-3">Become an affiliate</div>
                        <div
                            class="text-tertiary-400 font-ibm text-xm"
                        >Drive traffic to NFT.mx and enjoy from sale fees</div>
                    </div>
                </div>
            </div>
            <div class="bg-black px-8 py-2 text-xs font-ibm-bold">
                <div class="max-w-screen-3xl mx-auto sm:flex">
                    <div class="flex-1 flex text-tertiary-600 justify-center sm:justify-start">
                        <a
                            href="https://www.atom.foundation/"
                            class="w-fit flex items-center"
                            target="_blank"
                        >
                            <div class>Powered by:</div>
                            <img src="/images/atom-logo-footer.png" class />
                        </a>
                    </div>
                    <div class="flex justify-center sm:justify-start">
                        <div class="w-fit flex">
                            <a href="https://polygonscan.com/" target="_blank">
                                <img src="/images/polygon-logo-footer.png" class />
                            </a>
                            <div class="border-r border-tertiary-800 my-2 mx-2"></div>
                            <a href="https://ethereum.org/en/" target="_blank">
                                <img src="/images/eth-logo-footer.png" class />
                            </a>
                            <div class="border-r border-tertiary-800 my-2 mx-2"></div>
                            <a href="https://www.binance.com/en" target="_blank">
                                <img src="/images/bsc-logo-footer.png" class />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-xm {
    font-size: 0.81rem;
    line-height: 1.5rem;
}
.text-xb {
    font-size: 19px;
}
</style>