import Vue from 'vue';
import ColorIndex from './color-index.vue';

const vm = new Vue({
  el: '#app',
  components: { ColorIndex },
  template: `<div>
    <h1>Color Index</h1>
    <color-index></color-index>
  </div>`,
});
