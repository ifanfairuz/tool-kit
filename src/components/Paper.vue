<template>
  <div class="page" :class="{ 'shadow-lg': preview }" :style="style_margin" :size="size" :layout="orientation">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'paper',
  props: ['size', 'orientation', 'margin', 'preview'],
  computed: {
    style_margin() {
      if (!this.margin) return '';
      return (
        `padding-top: ${this.margin.top}cm;
        padding-left: ${this.margin.left}cm;
        padding-bottom: ${this.margin.bottom}cm;
        padding-right: ${this.margin.right}cm;`
      );
    }
  }
}
</script>

<style scoped>
.page {
  background: white;
  display: block;
  margin: 0px auto;
  margin-bottom: 0.5cm;
  position: relative;
}
.page[size="A4"] {  
  width: 21cm;
  height: 30cm; 
}
.page[size="A4"][layout="landscape"] {
  width: 29.7cm;
  height: 21cm;  
}
.page[size="A3"] {
  width: 29.7cm;
  height: 42cm;
}
.page[size="A3"][layout="landscape"] {
  width: 42cm;
  height: 29.7cm;  
}
.page[size="A5"] {
  width: 14.8cm;
  height: 21cm;
}
.page[size="A5"][layout="landscape"] {
  width: 21cm;
  height: 14.8cm;  
}
</style>