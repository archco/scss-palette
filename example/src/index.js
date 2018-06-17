import Vue from 'vue';
import ColorIndex from './color-index.vue';
import pkg from '../../package.json';

const vm = new Vue({
  el: '#app',
  components: { ColorIndex },
  template: `<div>
    <h1>Color Index v${pkg.version}</h1>
    <color-index></color-index>
  </div>`,
  data() {
    return {
      pkg,
    };
  },
});
