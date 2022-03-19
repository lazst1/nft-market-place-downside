<script setup>
import NftmxTypography from '@/core/components/NftmxTypography.vue';
import { computed, onMounted, onUpdated, ref, watch } from 'vue';
import { useStore } from 'vuex';

defineProps({
    extend: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['handle-footer'])

const store = useStore();
const footer = ref();
const windowWidth = computed(() => store.state.app.windowWidth);

onMounted(() => {
    emit('handle-footer', footer.value.scrollHeight);
})
watch(windowWidth, val => {
    emit('handle-footer', footer.value.scrollHeight);
})
</script>

<template>
    <div ref="footer" class="bottom-0 w-full font-ibm absolute">
        <div class="bg-black text-white pt-6 pb-7 px-8">
            <p
                class="text-center text-sm sm:text-19 text-primary-900 font-press leading-6 sm:leading-9"
            >NFT.mx is a fully decentralized protocol</p>
            <p
                class="text-center text-sm pb-px"
            >All generated fees and gas costs are 100% reimbursed with the NFTmx token</p>
        </div>
        <div v-if="extend" class="bg-tertiary-900 text-center pt-12">
            <div class="max-w-screen-3xl mx-auto pb-24.25">
                <div class="text-white font-press px-4 pt-9.75 pb-2 sm:pb-6 lg:pb-12.5">
                    <nftmx-typography h1>For developers and marketers</nftmx-typography>
                </div>
                <div
                    class="grid grid-cols-1 lg:grid-cols-3 px-5.5 sm:px-10 md:px-16 lg:px-22 sm:gap-10 lg:gap-32"
                >
                    <div class="flex flex-col items-center px-1">
                        <img src="/images/landing/free-whitelabel.png" class="h-25 mb-5.25" />
                        <div class="text-white font-ibm-medium text-lg py-3">Free Whitelabel</div>
                        <div
                            class="text-tertiary-400 font-ibm text-xm"
                        >Build for FREE your own NFT.mx under a new brand and enjoy from sale fees</div>
                    </div>
                    <div class="flex flex-col items-center px-1">
                        <img src="/images/landing/display-us.png" class="h-25 mb-5.25" />
                        <div class="text-white font-ibm-medium text-lg py-3">Display us</div>
                        <div
                            class="text-tertiary-400 font-ibm text-xm"
                        >Use our API to display NFT on you website and enjoy from sale fees</div>
                    </div>
                    <div class="flex flex-col items-center px-1">
                        <img src="/images/landing/become-an-affiliate.png" class="h-25 mb-5.25" />
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
                            <img src="/images/logo/atom-logo-footer.png" class="h-12.5" />
                        </a>
                    </div>
                    <div class="flex justify-center sm:justify-start">
                        <div class="w-fit flex">
                            <a href="https://polygon.technology/" target="_blank">
                                <img src="/images/logo/polygon-logo-footer.png" class="h-12.5" />
                            </a>
                            <div class="border-r border-tertiary-800 my-2 mx-2"></div>
                            <a href="https://ethereum.org/en/" target="_blank">
                                <img src="/images/logo/eth-logo-footer.png" class="h-12.5" />
                            </a>
                            <div class="border-r border-tertiary-800 my-2 mx-2"></div>
                            <a href="https://www.binance.com/en" target="_blank">
                                <img src="/images/logo/bsc-logo-footer.png" class="h-12.5" />
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
.text-19 {
    font-size: 19px;
    line-height: 28px;
}
</style>
