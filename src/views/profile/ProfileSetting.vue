<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import NftmxSelect from '@/core/components/NftmxSelect.vue';
import NftmxSelectNetwork from '@/core/components/NftmxSelectNetwork.vue';
import NftmxSellGrid from '@/core/components/NftmxSellGrid.vue';
import NftmxFileUploader from '@/core/components/NftmxFileUploader.vue';
import NavBarSearch from '@/core/container/NavBarSearch.vue';
import NftmxInput from '@/core/components/NftmxInput.vue';
import NftmxTextarea from '@/core/components/NftmxTextarea.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';

const store = useStore();
const username = ref('');
const profileImg = ref();
const profileBanner = ref();
const bio = ref('');
const email = ref('');
const website = ref('');
const twitter = ref('');
const instagram = ref('');

function save() {
    console.log(username.value)
}

</script>

<template>
    <nav-bar-search></nav-bar-search>
    <body-container>
        <div class="mt-10.75 mb-2.5 text-white text-center">
            <div class="col-span-2 font-press text-xl md:text-2.5xl 2xl:text-3xl">Profile Settings</div>
        </div>
        <div>
            <nftmx-sell-grid class="">
                <template v-slot:item>
                    <div class="font-ibm-bold text-lg pt-3.5">Username</div>
                </template>
                <template v-slot:value>
                    <div class="font-ibm text-sm text-tertiary-400 mt-3 md:mt-0">
                        <nftmx-input v-model="username" />
                    </div>
                </template>
            </nftmx-sell-grid>
            <nftmx-sell-grid class="grid-cols-2 xl:grid-cols-3">
                <template v-slot:item>
                    <div class="font-ibm-bold text-lg pt-2.5">Profile Image</div>
                </template>
                <template v-slot:value>
                    <div class="md:grid md:grid-cols-8 text-tertiary-500 mt-4 xl:mt-0">
                        <div class="col-span-5 md:pr-5">
                            <nftmx-file-uploader class="h-50 md:h-79"></nftmx-file-uploader>
                        </div>
                        <div class="col-span-3 md:pl-6 mt-5 md:mt-0 w-full">
                            <div class="border-2 border-black text-center flex flex-col justify-center w-full md:w-auto h-50 md:h-full">
                                <div class="font-ibm-bold text-lg md:text-2xl leading-9">Preview Image</div>
                                <div class="text-sm">Upload file to preview your profile image</div>
                            </div>
                        </div>
                    </div>
                </template>
            </nftmx-sell-grid>
            <nftmx-sell-grid class="mt-10 grid-cols-2 xl:grid-cols-3">
                <template v-slot:item>
                    <div class="font-ibm-bold text-lg pt-3.5">Profile Banner</div>
                </template>
                <template v-slot:value>
                    <div class="md:grid md:grid-cols-8 text-tertiary-500 mt-4 xl:mt-0">
                        <div class="col-span-5 md:pr-5">
                            <nftmx-file-uploader class="h-45"></nftmx-file-uploader>
                        </div>
                        <div class="col-span-3 md:pl-6 mt-5 md:mt-0 w-full">
                            <div
                                class="border-2 border-black text-center h-45 md:h-full flex flex-col justify-center pb-4"
                            >
                                <div class="font-ibm-bold text-lg md:text-2xl leading-9">Preview Banner</div>
                                <div class="text-sm">Upload file to preview your profile banner</div>
                            </div>
                        </div>
                    </div>
                </template>
            </nftmx-sell-grid>
            <nftmx-sell-grid class="mt-10">
                <template v-slot:item>
                    <div class="font-ibm-bold text-lg pt-2.25">Bio</div>
                    <div
                        class="font-ibm-medium text-sm text-tertiary-500 pt-2"
                    >Tell the world your story!</div>
                </template>
                <template v-slot:value>
                    <div class="font-ibm text-sm text-tertiary-400 h-37.5 mt-4.75 md:mt-0">
                        <nftmx-textarea v-model="username" />
                    </div>
                </template>
            </nftmx-sell-grid>
            <nftmx-sell-grid>
                <template v-slot:item>
                    <div class="font-ibm-bold text-lg pt-3.5">Email Address</div>
                </template>
                <template v-slot:value>
                    <div class="font-ibm text-sm text-tertiary-400 pt-3 md:pt-0">
                        <nftmx-input v-model="username" />
                    </div>
                </template>
            </nftmx-sell-grid>
            <nftmx-sell-grid class="mt-9.75">
                <template v-slot:item>
                    <div class="font-ibm-bold text-lg pt-3.5">Links</div>
                </template>
                <template v-slot:value>
                    <div class="font-ibm text-sm text-tertiary-400 pt-4 md:pt-0">
                        <div>
                            <nftmx-input
                                v-model="twitter"
                                iconGroup="fas"
                                icon="globe"
                                placeholder="Your website"
                            />
                        </div>
                        <div class="pt-4.75">
                            <nftmx-input
                                v-model="twitter"
                                iconGroup="fab"
                                icon="twitter"
                                placeholder="Your twitter profile"
                            />
                        </div>
                        <div class="pt-4.75">
                            <nftmx-input
                                v-model="twitter"
                                iconGroup="fab"
                                icon="instagram"
                                placeholder="Your instagram profile"
                            />
                        </div>
                    </div>
                </template>
            </nftmx-sell-grid>
            <nftmx-sell-grid>
                <template v-slot:item>
                    <div class="font-ibm-bold text-lg pt-3.5">Wallet Address</div>
                </template>
                <template v-slot:value>
                    <div class="font-ibm text-sm text-tertiary-400 relative mt-3 md:mt-0">
                        <nftmx-input
                            :placeholder="store.getters['auth/getWalletAddress']"
                            readonly
                        />
                        <font-awesome-icon
                            :icon="['fas', 'copy']"
                            class="text-white text-base absolute right-6 top-5 cursor-pointer"
                        />
                    </div>
                </template>
            </nftmx-sell-grid>
        </div>
        <div class="mt-7.5 md:mt-25 mb-11 md:mb-20.75 flex justify-center">
            <nftmx-button
                color="primary"
                label="SAVE"
                class="font-press w-btn-xl text-sm md:text-lg  absolute left-0 bottom-0 h-15 md:h-17.75"
            ></nftmx-button>
        </div>
    </body-container>
    <nftmx-footer />
</template>
