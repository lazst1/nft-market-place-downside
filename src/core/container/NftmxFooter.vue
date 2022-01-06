<script setup>
defineProps({
    devs: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="bottom-0 w-full font-ibm">
        <div class="bg-black text-white pt-6 pb-7 border-b border-tertiary-800 px-8">
            <p class="text-center text-xl text-primary-900 font-press leading-9">
                NFT.mx is a fully centralized protocol
            </p>
            <p class="text-center text-sm">
                All generated fees and gas costs are 100% reimbursed with the NFTmx token
            </p>
        </div>
        <div v-if="devs" class="bg-tertiary-900 text-center pt-11 pb-28">
            <div class="text-white font-press text-3xl py-10">
                For developers and marketers
            </div>
            <div class="grid grid-cols-3 px-28 gap-32">
                <div class="flex flex-col items-center px-1">
                    <img src="" alt="Image" class="w-20" />
                    <div class="text-white font-ibm-medium text-lg py-3">Free Whitelabel</div>
                    <div class="text-tertiary-400 font-ibm text-xm">
                        Build for FREE your own NFT.mx under a new brand and enjoy from sale fees
                    </div>
                </div>
                <div class="flex flex-col items-center px-1">
                    <img src="" alt="Image" class="w-20" />
                    <div class="text-white font-ibm-medium text-lg py-3">Display us</div>
                    <div class="text-tertiary-400 font-ibm text-xm">
                        Use our API to display NFT on you website and enjoy from sale fees
                    </div>
                </div>
                <div class="flex flex-col items-center px-1">
                    <img src="" alt="Image" class="w-20" />
                    <div class="text-white font-ibm-medium text-lg py-3">Become an affiliate</div>
                    <div class="text-tertiary-400 font-ibm text-xm">
                        Drive traffic to NFT.mx and enjoy from sale fees
                    </div>
                </div>
            </div>
        </div>
        <div
            class="flex bg-black text-white px-8 py-3 text-xs"
        >
            <div class="flex-1">
                Powered by: 
            </div>
            <div>
                Logo
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-xm {
    font-size: 0.81rem;
    line-height: 1.5rem;
}
</style>