<template>
  <div>
    <div
      v-for="[key, colors] of Object.entries(colorList)"
      :key="key"
    >
      <h2>{{ key }}</h2>
      <div>
        <div
          v-for="color of colors"
          :key="color.name"
          :class="`box-${color.name}`"
          :data-color="color.value"
        >
          {{ color.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Colors from '../../test/colors.json';
import MooColor from 'moo-color';

export default {
  data() {
    return {
      colorList: this.getColorList(),
    };
  },
  created() {
    for (const colors of Object.values(this.colorList)) {
      // sort colors by brightness.
      colors.sort((a, b) => {
        const getBrightness = c => new MooColor(c.value).brightness;
        return getBrightness(b) - getBrightness(a);
      });
    }
  },
  methods: {
    getColorList() {
      /*
      type ColorList = {
        [index: string]: Color[];
      }
      interface Color {
        name: string;
        value: string;
      }
       */
      let colorList = {};
      for (const [key, value] of Object.entries(Colors)) {
        colorList[key] = this.convertColors(value);
      }
      return colorList;
    },
    convertColors(colorObj) {
      // converts (key-val) to Color[]
      let colors = [];
      for (const [name, value] of Object.entries(colorObj)) {
        colors.push({ name, value });
      }
      return colors;
    },
  },
}
</script>

<style lang="scss">
@import '../../src/palette';

[class*="box-"] {
  display: inline-block;
  width: 100px;
  height: 100px;
  padding: 4px;
  margin: 8px;
  word-wrap: break-word;
  vertical-align: top;
  border-radius: 4px;
}

@each $name, $value in $palette {
  .box-#{$name} {
    color: get-contrast-color($value);
    background-color: $value;
  }
}
</style>
