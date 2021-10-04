<template>
  <div class="rounded-lg shadow bg-base-200 drawer drawer-mobile drawer-end">
    <input :id="name" type="checkbox" class="drawer-toggle">
    <div class="drawer-content">
      <slot />
    </div> 
    <div class="drawer-side">
      <label :for="name" class="drawer-overlay"></label>
      <slot name="menu" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>