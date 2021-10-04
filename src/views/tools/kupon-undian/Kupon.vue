<template>
  <div class="kupon" :style="style">
    
  </div>
</template>

<script>
export default {
  name: 'kupon-undian-kupon',
  props: ['config'],
  computed: {
    bg_style() {
      const { bg } = this.config.coupon;
      switch (bg.type) {
        case 'solid':
          return `background-color: ${bg.solid.style};`;
        case 'gradient':
          return `background: ${bg.gradient.style};`;
        case 'image':
          return (
            `background-image: url(${bg.image.file});
            background-position: ${bg.image.position};
            background-repeat: ${bg.image.repeat ? 'repeat' : 'no-repeat'};
            background-size: ${bg.image.width}% ${bg.image.height}%;`
          );
        default:
          return '';
      }
    },
    style() {
      return `${this.bg_style}`;
    }
  }
}
</script>

<style scoped>
.kupon {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>