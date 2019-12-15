import Vue from 'vue';
import ColorIndex from './color-index.vue';
import pkg from '../../package.json';

/* eslint-disable no-unused-vars */
window.vm = new Vue({
  el: '#app',
  components: { ColorIndex },
  data() {
    return {
      pkg,
    };
  },
  template: `
  <div class="container">
    <h1 class="my-4">Color Index v${pkg.version}</h1>
    <color-index></color-index>
  </div>`,
});
