<script setup>
import Ribbon from '@/core/components/basic/Ribbon.vue';
import NftmxButton from '../components/basic/NftmxButton.vue';
import { computed, ref } from 'vue';

const props = defineProps({
    image: {
        type: String,
        default: ''
    },
    approved: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['approve'])

const tokenImage = ref(props.image || 'images/nfts/img10.png')

</script>

<template>
    <div class="w-full relative">
        <div
            :class="{ 'transition hover:shadow-[0_0px_12px_0px_rgb(0_0_0_/_0.1),_0_0px_0px_0px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700': approved }"
        >
            <div class="bg-black relative">
                <div
                    class="relative w-full pt-65per overflow-hidden p-6"
                    :style="{ background: 'url(' + tokenImage + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }"
                />
            </div>
            <div class="p-5">
                <slot />
            </div>
        </div>
        <div
            v-if="!approved"
            class="absolute top-0 transition w-full h-full bg-black bg-opacity-80 flex justify-center items-center"
        >
            <nftmx-button
                label="Approve To List"
                color="primary"
                outline
                class="font-press z-10 text-xs text-primary-400 mx-2 h-13.25"
                @click="emit('approve')"
            />
        </div>
    </div>
</template>
