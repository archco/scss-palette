import Vue from 'vue';
import ColorIndex from './color-index.vue';
import pkg from '../../package.json';

/* eslint-disable no-unused-vars */
const vm = new Vue({
  el: '#app',
  components: { ColorIndex },
  data() {
    return {
      pkg,
    };
  },
  template: `<div>
    <h1>Color Index v${pkg.version}</h1>
    <color-index></color-index>
  </div>`,
});
