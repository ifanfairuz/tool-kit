<template>
  <div class="card shadow-lg bg-base-100">
    <div class="card-body">
      <h2 class="card-title" v-if="title">{{ title }}</h2> 
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['title']
}
</script>