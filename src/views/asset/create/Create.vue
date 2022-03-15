<script setup>
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import NftmxSelect from '@/core/components/NftmxSelect.vue';
import NftmxSelectNetwork from '@/core/components/NftmxSelectNetwork.vue';
import NftmxSellGrid from '@/core/components/NftmxSellGrid.vue';
import NftmxFileUploader from '@/core/components/NftmxFileUploader.vue';

</script>

<template>
    <body-container>
        <nftmx-sell-grid class="my-2.5">
            <template v-slot:value>
                <div class="col-span-2 font-press text-3xl">
                    Create an NFT
                </div>
            </template>
        </nftmx-sell-grid>
        <nftmx-sell-grid class="mt-13.5">
            <template v-slot:item>
                <div class="font-ibm-bold text-lg pt-3.5">
                    Blockchain
                </div>
            </template>
            <template v-slot:value>
                <div class="font-ibm text-sm text-tertiary-400">
                    <nftmx-select-network />
                </div>
            </template>
        </nftmx-sell-grid>
        <nftmx-sell-grid class="mt-10">
            <template v-slot:item>
                <div class="font-ibm-bold text-lg pt-3">
                    Image, Video, Audio, or 3D Model
                </div>
                <div class="font-ibm-medium text-sm text-tertiary-500 pt-1">
                    File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 40 MB
                </div>
            </template>
            <template v-slot:value>
                <div class="grid grid-cols-3 text-tertiary-500">
                    <div class="col-span-2 pr-10">
                        <nftmx-file-uploader></nftmx-file-uploader>
                    </div>
                    <div class="col-span-1 border-2 border-black text-center pt-28">
                        <div class="font-ibm-bold text-2xl leading-9">
                            Preview your NFT
                        </div>
                        <div class="text-sm">
                            upload file to preview your new NFT
                        </div>
                    </div>
                </div>
            </template>
        </nftmx-sell-grid>
    </body-container>
</template>
