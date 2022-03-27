<template>
  <div>
      <img
      :src="require('./../../assets/' + pic)"
      :width="width"
      :height="height"
      :class="pic_class" />
      <p class="pl-1 font-bold text-xl font-mono">{{inputText}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Picture',
  props: {
    width: {
      default: '100px',
    },
    height: {
      default: '100px',
    },
    pic: {
      default: 'logo.png',
    },
    inputText: {
      default: '',
    },
    pic_class: {
      default: '',
    },
  },

});
</script>
<style scoped>
  div {
    display: flex;
    align-items: center;
  }
</style>
