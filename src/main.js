import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@lib/router'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component('layout', () => import('@layouts/Layout.vue'));
Vue.component('navbar', () => import('@components/main/Navbar.vue'));
Vue.component('card', () => import('@components/main/Card.vue'));
Vue.component('foot', () => import('@components/main/Footer.vue'));

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
