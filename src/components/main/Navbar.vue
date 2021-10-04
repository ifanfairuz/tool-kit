<template>
  <div class="navbar-box">
    <div class="navbar mb-2 text-primary-content rounded-box" :class="{ 'bg-main': !transparent }">
      <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold">Tools Kit</span>
      </div>
      <div class="flex-none px-2 mx-2">
        <div class="items-stretch hidden lg:flex">
          <component :is="navbar_parallax ? 'a' : 'router-link'" :href="navbar_parallax ? '#home' : false" :to="!navbar_parallax ? '/#home' : false" class="btn btn-ghost btn-sm rounded-btn">Beranda</component>
          <component :is="navbar_parallax ? 'a' : 'router-link'" :href="navbar_parallax ? '#tools' : false" :to="!navbar_parallax ? '/#tools' : false" class="btn btn-ghost btn-sm rounded-btn">Tools</component>
        </div>
      </div> 
      <!-- <div class="flex flex-row space-x-1">
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">              
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>            
            </svg>
          </button>
        </div>
        <div class="flex-none overflow-hidden search-box" :class="{ 'active': search }">
          <input type="text" placeholder="username" class="input input-sm text-neutral">
        </div>
        <div class="flex-none">
          <button class="btn btn-square btn-ghost btn-search" @click="toggleSearch">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">             
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
            </svg>
          </button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['transparent', 'navbar_parallax'],
  data: () => ({
    search: false
  }),
  methods: {
    toggleSearch() {
      this.search = !this.search;
    }
  }
}
</script>

<style scoped>
.navbar-box {
  padding: 10px;
}
.navbar .btn > .menu {
  display: none;
}
.navbar .btn:hover > .menu {
  display: flex;
}
.search-box { 
  transition: all;
  transition-duration: 100ms;
  width: 180px;
}
.search-box:not(.active) { 
  width: 0px;
}
.bg-main {
  background-size: 100vw 100vh;
}
</style>