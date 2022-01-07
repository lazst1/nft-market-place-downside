<template>
    <span ref="btnRef" v-on:mouseenter="toggleTooltip()" v-on:mouseleave="toggleTooltip()" class="">
        <font-awesome-icon :icon="['fas', 'question-circle']" class="" />
    </span>
    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow, 'block': tooltipShow}" class="bg-pink-600 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words">
        <div>
            <div class="text-white p-3">
                And here's some amazing content. It's very engaging. Right?
            </div>
        </div>
    </div>
</template>

<script>

import { createPopper } from "@popperjs/core";

export default {
  name: "bottom-pink-tooltip",
  data() {
    return {
      tooltipShow: false
    }
  },
  methods: {
    toggleTooltip: function(){
      if(this.tooltipShow){
        this.tooltipShow = false;
      } else {
        this.tooltipShow = true;
        createPopper(this.$refs.btnRef, this.$refs.tooltipRef, {
          placement: "bottom"
        });
      }
    }
  }
}
</script>