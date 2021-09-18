<template>
  <layout :no_navbar="true">
    
    <div id="home" class="bg-main flex flex-col h-screen">
      <navbar :transparent="navbar_transparent" class="fixed top-0 z-30 navbar-full" />
      <div class="hero text-primary-content relative flex-1">
        <div class="text-center hero-content absolute top-0 bottom-1/4">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">
              Tools Kit
              <h3 class="text-2xl font-normal">for you by Ifan Fairuz</h3>
            </h1>
            <a href="#tools" class="btn btn-primary">Langsung Gass</a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="tools.length > 2" id="tools-main" class="overflow-x-scroll -mt-28 pb-5">
      <div class="flex flex-row justify-center min-w-max">
        <tool-card v-for="tool in tools.slice(0, 3)" :key="`tool-home-${tool.id}`" :tool="tool" class="mx-3" />
      </div>
    </div>
    <div v-else class="pb-10"></div>

    <div id="tools" class="px-10 pt-26 md:px-20 pb-20">
      <h1 class="mb-5 text-4xl font-bold">Tools</h1>

      <div class="grid grid-cols-1 md:grid-cols-4">
        <div class="md:border-r border-base-300 text-neutral">
          <h3 class="text-xl mb-5">Categories</h3>
          <ul>
            <li v-for="(category, id) in categories" :key="`category-option-${id}`" class="mb-2">
              <a
                @click="toggleCategoryFilter(id)"
                class="badge badge-lg cursor-pointer text-neutral"
                :class="{
                  'badge-primary': filter.categories.includes(id),
                  'bg-base-100 border-base-100 text-base-content': !filter.categories.includes(id)
                }">
                {{ category }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-span-3 px-5">
          <div class="pb-5">
            <input type="text" v-model.trim="filter.keyword" placeholder="Search ..." class="input input-bordered shadow-xl w-full">
          </div>
          <div class="py-2 flex flex-wrap result-box">
            <tool-card v-for="tool in result" :key="`tool-result-${tool.id}`" :tool="tool" class="m-3" />
          </div>
        </div>

      </div>
    </div>

  </layout>
</template>

<script>
import datas from '@lib/datas';

const ToolCard = () => import('@components/ToolCard.vue');

export default {
  name: 'Home',
  components: {
    ToolCard
  },
  data: () => ({
    navbar_transparent: true,
    filter: {
      keyword: '',
      categories: []
    }
  }),
  computed: {
    tools() {
      return Object.values(datas.tools);
    },
    categories() {
      return datas.categories;
    },
    result() {
      const { keyword, categories } = this.filter;
      return this.tools.filter(t => {
        const in_keyword = keyword ? (
          t.name.toLowerCase().includes(keyword.toLowerCase()) ||
          t.category.toLowerCase().includes(keyword.toLowerCase()) ||
          t.description.toLowerCase().includes(keyword.toLowerCase())
        ) : true;
        const in_categories = categories.length > 0 ? (
          categories.includes(t.category)
        ) : true;
        return in_keyword && in_categories;
      });
    }
  },
  methods: {
    onScroll() {
      this.navbar_transparent = (document.documentElement.scrollTop < 80); 
    },
    toggleCategoryFilter(id) {
      if (this.filter.categories.includes(id)) this.filter.categories.splice(this.filter.categories.indexOf(id), 1);
      else this.filter.categories.push(id);
    }
  },
  mounted() {
    document.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style scoped>
#home { 
  max-height: 700px;
}
.navbar-full {
  width: 100vw;
}
.result-box {
  min-height: 300px;
}
</style>