<template>
  <div
    :class="`box-${color.name}`"
    :data-color="color.value"
  >
    <span>{{ color.name }}</span>
    <span>{{ color.value }}</span>
  </div>
</template>

<script>
/**
 * @typedef {Object} Color
 * @property {string} name
 * @property {string} value
 */

export default {
  props: {
    color: {
      type: Object,
      default: () => { return {}; },
    },
  },
  methods: {

  },
};
</script>

<style lang="scss">
[class*="box-"] {
  display: inline-flex;
  width: 120px;
  height: 120px;
  padding: .25em;
  margin: .1em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  vertical-align: top;
  border-radius: .5em;
}
</style>
