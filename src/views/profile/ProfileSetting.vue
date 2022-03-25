<script setup>
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import NftmxSelect from '@/core/components/basic/NftmxSelect.vue';
import NftmxSelectNetwork from '@/core/components/basic/NftmxSelectNetwork.vue';
import SettingItemRow from '@/core/components/basic/SettingItemRow.vue';
import NftmxFileUploader from '@/core/components/file-uploader/NftmxFileUploader.vue';
import NavBarSearch from '@/core/components/search/NavBarSearch.vue';
import NftmxInput from '@/core/components/basic/NftmxInput.vue';
import NftmxTextarea from '@/core/components/basic/NftmxTextarea.vue';
import NftmxButton from '@/core/components/basic/NftmxButton.vue';
import { baseURL, defaultUser } from '@/core/config'
import { useToast } from "vue-toastification";
import { emailValidate } from '@/core/utils';

const store = useStore();
const walletAddress = computed(() => store.getters['auth/walletAddress'])
const name = ref();
const profileImg = ref();
const profileBanner = ref();
const bio = ref();
const email = ref();
const website = ref();
const twitter = ref();
const instagram = ref();
const profileImgPreview = ref();
const profileBannerPreview = ref();
const toast = useToast();
const isEmail = ref(true);

function save() {
    if (!isEmail.value) {
        toast.error('Email is not valid');
        return;
    }
    const user = new FormData();
    user.append('name', name.value);
    if (profileImg.value) {
        user.append('profileImg', profileImg.value[0]);
    }
    if (profileBanner.value) {
        user.append('profileBanner', profileBanner.value[0]);
    }
    user.append('bio', bio.value);
    user.append('email', email.value);
    user.append('website', website.value);
    user.append('twitter', twitter.value);
    user.append('instagram', instagram.value);
    store.dispatch('auth/saveProfile', user);
    toast.success('Profile saved successfully!')
}

watchEffect(() => {
    const user = store.getters['auth/user'];
    if (user) {
        name.value = user.name;
        bio.value = user.bio;
        email.value = user.email;
        website.value = user.website;
        twitter.value = user.twitter;
        instagram.value = user.instagram;
        profileImgPreview.value = profileImg.value ? URL.createObjectURL(profileImg.value[0]) : user.profile_img ? baseURL + user.profile_img : '';
        profileBannerPreview.value = profileBanner.value ? URL.createObjectURL(profileBanner.value[0]) : user.profile_banner ? baseURL + user.profile_banner : '';
    }
})

watchEffect(() => {
    if (!email.value) return;

    if (emailValidate(email.value)) {
        isEmail.value = true;
    } else {
        isEmail.value = false
    }
})
const onCopy = (e) => {
    toast.success('Wallet Address is copied')
}
</script>

<template>
    <nav-bar-search></nav-bar-search>
    <body-container>
        <div class="mt-10.75 mb-2.5 text-white text-center">
            <div class="col-span-2 font-press text-xl md:text-2.5xl 2xl:text-3xl">Profile Settings</div>
        </div>
        <div>
            <setting-item-row class>
                <template v-slot:item>
                    <div class="font-ibm-bold text-lg pt-3.5">Username</div>
                </template>
                <template v-slot:value>
                    <div class="font-ibm text-sm text-tertiary-400 mt-3 md:mt-0">
                        <nftmx-input v-model="name" />
                    </div>
                </template>
            </setting-item-row>
            <setting-item-row class="grid-cols-2 xl:grid-cols-3">
                <template v-slot:item>
                    <div class="font-ibm-bold text-lg pt-2.5">Profile Image</div>
                </template>
                <template v-slot:value>
                    <div class="md:grid md:grid-cols-8 text-tertiary-500 mt-4 xl:mt-0">
                        <div class="col-span-5 md:pr-5">
                            <nftmx-file-uploader
                                id="profileImage"
                                class="h-50 md:h-79"
                                v-model="profileImg"
                            ></nftmx-file-uploader>
                        </div>
                        <div class="col-span-3 md:pl-6 mt-5 md:mt-0 w-full">
                            <div
                                class="border-2 border-black text-center flex flex-col justify-center w-full md:w-auto h-50 md:h-full"
                                :style="{ background: 'url(' + profileImgPreview + ')', backgroundSize: 'cover', backgroundPosition: 'center' }"
                            >
                                <div v-if="!profileImgPreview">
                                    <div
                                        class="font-ibm-bold text-lg md:text-2xl leading-9"
                                    >Preview Image</div>
                                    <div class="text-sm">Upload file to preview your profile image</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </setting-item-row>
            <setting-item-row class="mt-10 grid-cols-2 xl:grid-cols-3">
                <template v-slot:item>
                    <div class="font-ibm-bold text-lg pt-3.5">Profile Banner</div>
                </template>
                <template v-slot:value>
                    <div class="md:grid md:grid-cols-8 text-tertiary-500 mt-4 xl:mt-0">
                        <div class="col-span-5 md:pr-5">
                            <nftmx-file-uploader
                                id="profileBanner"
                                class="h-45"
                                v-model="profileBanner"
                            ></nftmx-file-uploader>
                        </div>
                        <div class="col-span-3 md:pl-6 mt-5 md:mt-0 w-full">
                            <div
                                class="border-2 border-black text-center h-45 md:h-full flex flex-col justify-center pb-4"
                                :style="{ background: 'url(' + profileBannerPreview + ')', backgroundSize: 'cover', backgroundPosition: 'center' }"
                            >
                                <div v-if="!profileBannerPreview">
                                    <div
                                        class="font-ibm-bold text-lg md:text-2xl leading-9"
                                    >Preview Banner</div>
                                    <div class="text-sm">Upload file to preview your profile banner</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </setting-item-row>
            <setting-item-row class="mt-10">
                <template v-slot:item>
                    <div class="font-ibm-bold text-lg pt-2.25">Bio</div>
                    <div
                        class="font-ibm-medium text-sm text-tertiary-500 pt-2"
                    >Tell the world your story!</div>
                </template>
                <template v-slot:value>
                    <div class="font-ibm text-sm text-tertiary-400 h-37.5 mt-4.75 md:mt-0">
                        <nftmx-textarea v-model="bio" />
                    </div>
                </template>
            </setting-item-row>
            <setting-item-row>
                <template v-slot:item>
                    <div class="font-ibm-bold text-lg pt-3.5">Email Address</div>
                </template>
                <template v-slot:value>
                    <div class="relative font-ibm text-sm text-tertiary-400 pt-3 md:pt-0">
                        <nftmx-input v-model="email" />
                        <div
                            v-if="!isEmail"
                            class="absolute font-ibm text-11 text-red-900 mt-1"
                        >Please enter valid email</div>
                    </div>
                </template>
            </setting-item-row>
            <setting-item-row class="mt-9.75">
                <template v-slot:item>
                    <div class="font-ibm-bold text-lg pt-3.5">Links</div>
                </template>
                <template v-slot:value>
                    <div class="font-ibm text-sm text-tertiary-400 pt-4 md:pt-0">
                        <div>
                            <nftmx-input
                                v-model="website"
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
                                v-model="instagram"
                                iconGroup="fab"
                                icon="instagram"
                                placeholder="Your instagram profile"
                            />
                        </div>
                    </div>
                </template>
            </setting-item-row>
            <setting-item-row class="mt-9.75">
                <template v-slot:item>
                    <div class="font-ibm-bold text-lg pt-3.5">Wallet Address</div>
                </template>
                <template v-slot:value>
                    <div
                        class="flex font-ibm text-sm text-tertiary-400 mt-3 md:mt-0 cursor-default"
                    >
                        <div class="w-full">
                            <nftmx-input :placeholder="walletAddress" readonly />
                        </div>
                        <div
                            class="text-white hover:text-primary-900 text-base right-6 top-4 cursor-pointer float-right w-fit -ml-9 mt-4"
                            v-clipboard:copy="walletAddress"
                            v-clipboard:success="onCopy"
                        >
                            <font-awesome-icon :icon="['fas', 'copy']" />
                        </div>
                    </div>
                </template>
            </setting-item-row>
        </div>
        <div class="mt-7.5 md:mt-25 mb-11 md:mb-20.75 flex justify-center">
            <nftmx-button
                color="primary"
                label="SAVE"
                class="font-press w-btn-xl text-sm md:text-lg absolute left-0 bottom-0 h-15 md:h-17.75"
                @click="save()"
            ></nftmx-button>
        </div>
    </body-container>
</template>
