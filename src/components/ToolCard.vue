<template>
  <card v-if="tool" class="w-60" :title="tool.name">
    <a class="badge mb-5">{{ categories[tool.category] }}</a>
    <p class="text-base-content mb-5 max-h-20 overflow-y-auto">
      <span class="overflow-ellipsis whitespace-pre-line">
        {{ tool.description }}
      </span>
    </p>
    <router-link :to="`/tool/${tool.id}`" class="btn btn-primary">Use</router-link>
  </card>
</template>

<script>
import datas from '@lib/datas';

export default {
  name: 'ToolCard',
  props: ['tool'],
  computed:{
    categories() {
      return datas.categories;
    }
  }
}
</script>