<template>
  <div>
    <navbar v-if="!no_navbar" :navbar_parallax="navbar_parallax" />
    <slot />
    <foot v-if="!no_footer" />
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: ['no_navbar', 'no_footer', 'navbar_parallax']
}
</script>