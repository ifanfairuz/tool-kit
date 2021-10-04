<template>
  <layout>
    <div v-if="tool">
      <component :is="tool.component" />
    </div>
    <div v-else class="flex flex-col items-center justify-center error-box">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-28 h-28 mb-5 text-base-300" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.493 2 11.953 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/>
      </svg>
      <h1 class="text-center text-xl text-neutral">Maaf, tool dengan kata kunci "{{ toolid }}" tidak ditemukan.</h1>
    </div>
  </layout>
</template>

<script>
import datas from '@lib/datas';

export default {
  name: 'Tool',
  props: ['toolid'],
  computed: {
    tool() {
      return datas.tools[this.toolid];
    }
  }
}
</script>

<style scoped>
.error-box {
  height: 70vh;
}
</style>