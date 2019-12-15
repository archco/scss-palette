<template>
  <div>
    <div class="d-flex justify-content-end align-items-center mb-3">
      <div class="mx-2">
        total: {{ totalCount }}
      </div>
      <select
        id="sort-colors"
        v-model="sortSelected"
        class="form-control mx-2 w-25"
        @change="sortChanged"
      >
        <option value="brightness">
          Brightness
        </option>
        <option value="name">
          Name
        </option>
      </select>
      <button
        class="btn btn-primary mx-2"
        @click="toggleBackground"
      >
        toggle background
      </button>
    </div>
    <div
      v-for="[key, colors] of Object.entries(colorList)"
      :key="key"
    >
      <h2>{{ `${key} - ${colors.length}` }}</h2>
      <div class="mb-3">
        <color-item
          v-for="color of colors"
          :key="color.name"
          :color="color"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Colors from '../../test/colors.json';
import MooColor from 'moo-color';
import ColorItem from './color-item';

/**
 * @typedef {Object} Color
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef {Object} ColorList
 * @property {Color[]} [string]
*/

export default {
  components: { ColorItem },
  data() {
    return {
      sortSelected: 'brightness',
    };
  },
  computed: {
    /**
     * @returns {ColorList}
     */
    colorList() {
      /** @type {ColorList} */
      let colorList = {};
      for (const [key, value] of Object.entries(Colors)) {
        colorList[key] = this.convertColors(value);
      }
      return colorList;
    },
    totalCount() {
      let count = 0;
      Object.values(this.colorList).forEach(a => count += a.length);
      return count;
    },
  },
  created() {
    this.sortByBrightness();
    console.log(this.totalCount);
  },
  methods: {
    /**
     * Converts (key-val) to Color[]
     * @returns {Color[]}
     */
    convertColors(colorObj) {
      /** @type {Color[]} */
      let colors = [];
      for (const [name, value] of Object.entries(colorObj)) {
        colors.push({ name, value });
      }
      return colors;
    },
    sortChanged(e) {
      switch (e.target.value) {
        case 'brightness':
          this.sortByBrightness();
          break;
        case 'name':
        default:
          this.sortByName();
      }
    },
    sortByBrightness() {
      for (const colors of Object.values(this.colorList)) {
        colors.sort((a, b) => {
          const getBrightness = c => new MooColor(c.value).brightness;
          return getBrightness(b) - getBrightness(a);
        });
      }
    },
    sortByName() {
      for (const colors of Object.values(this.colorList)) {
        colors.sort((a, b) => a.name > b.name ? 1 : -1);
      }
    },
    toggleBackground() {
      document.body.classList.toggle('dark-theme');
    },
  },
}
</script>

<style lang="scss">
@import '../../src/palette';

$white: #fff;
$black: palette('charcoal');

body {
  transition: color .6s ease-out, background-color .6s ease-out;

  &.dark-theme {
    color: $white;
    background-color: $black;
  }
}

@each $name, $value in $palette {
  .box-#{$name} {
    color: get-contrast-color($value);
    background-color: $value;
  }
}
</style>
