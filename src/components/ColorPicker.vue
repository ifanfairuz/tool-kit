<template>
  <color-picker
    style="background: transparent"
    :color="gradient ? null : color"
    :gradient="gradient ? color : null"
    :isGradient="gradient"
    :onStartChange="c => change(c)"
    :onChange="c => change(c)"
    :onEndChange="c => change(c)" />
</template>

<script>
const ColorPicker = () => import('vue-color-gradient-picker').then(c => c.ColorPicker)
export default {
  props: ['color', 'gradient'],
  components:{
    ColorPicker
  },
  methods: {
    change(c) {
      this.$emit('change', c);
    }
  }
}
</script>
<style src="vue-color-gradient-picker/dist/index.css" lang="css" />