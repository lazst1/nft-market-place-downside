<template>
  <div
    class="custom-select relative w-full text-left leading-12.5"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <div
      :class="[big ? 'h-15' : '', bgColor ? bgColor + ' pl-3' : 'bg-tertiary-800 pl-3.5', 'selected border-2 border-black flex items-center cursor-pointer']"
      @click="open = !open"
    >
      <img :src="selected.icon" class="mr-3" />
      <span :class="[bgColor ? 'ml-0.75' : 'ml-px']">{{ selected.name }}</span>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        :class="[big ? 'h-15' : '', bgColor, 'flex items-center']"
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        <img :src="option.icon" class="mr-3" />
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { networks } from "../config";

export default {
  props: {
    default: {
      type: Object,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    data: Array,
    color: String,
    big: Boolean,
  },
  data() {
    return {
      open: false,
      options: this.data || networks,
      selected: this.data ? this.data[0] : networks[0],
      bgColor: this.color ? 'bg-' + this.color : null
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 26px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  overflow: hidden;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  position: absolute;
  background-color: #343434;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #151515;
}

.selectHide {
  display: none;
}
</style>
