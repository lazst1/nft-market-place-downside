<script setup>
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';

const store = useStore();

</script>

<template>
    <div class="pt-6 font-ibm-bold text-primary-900 text-lg">Kyle White</div>
    <div class="flex pb-6 md:pb-px items-start gap-6">
        <div class="flex-1">
            <div class="flex-1 flex-wrap flex text-2xl md:text-3xl font-ibm-bold mt-1.5 md:mt-1.25 pb-4.75 md:pb-8">
                <div class="mr-4">
                    Play Quiet
                </div>
                <div>
                    #10/10
                </div>
            </div>
            <div class="flex text-xxs pb-3.5 md:pb-12">
                <div class="flex-1 md:flex">
                    <div class="w-max flex">
                        <div class="w-max">
                            Created by
                        </div>
                        <span class="text-primary-900 pl-2">234...293</span>
                    </div>
                    <span v-if="store.state.app.windowWidth >= themeConfig.md" class="px-2"> | </span>
                    <div class="w-max flex mt-2.5 md:mt-0">
                        <div class="w-max">Owned by</div>
                        <div class="text-primary-900 pl-2">234...293</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text:xs md:text-base text-tertiary-400 flex items-end font-ibm-light md:font-ibm-semi-bold pt-4">
            <span class="px-2 leading-4">124</span>
            <font-awesome-icon :icon="['fas', 'thumbs-up']" class="text-lg md:text-2xl text-primary-900" />
        </div>
    </div>
    
</template>
