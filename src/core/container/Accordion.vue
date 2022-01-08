<script>

export default {
    props: {
        accordion: {
            type: Boolean,
            default: true
        },
        border: {
            type: Boolean,
            default: true
        },
        sidebar: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const accordion = props.accordion;

        return {
            accordion
        }
    },
    data () {
        return {
            open: true
        }
    },
    methods: {
        clickMenu() {
            this.open = this.accordion ? !this.open : true;
        }
    },
}
</script>


<template>
    <div :class="[border?'border border-black bg-tertiary-800':'', 'font-ibm']">
        <div :class="[border?'border-b border-black':'', sidebar?'':'px-5', 'flex text-xl text-white font-bold']">
            <div class="flex-1">
                <slot name="caption"></slot>
            </div>
            <div v-if="accordion" class="self-center cursor-pointer" @click="clickMenu">
                <svg v-if="!open" style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
                </svg>
                <svg v-if="open" style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7,15L12,10L17,15H7Z" />
                </svg>
            </div>
        </div>
        <div v-if="open">
            <slot />
        </div>
    </div>
</template>