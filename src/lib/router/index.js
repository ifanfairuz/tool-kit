import VueRouter from 'vue-router';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@views/Home.vue')
    },
    {
      path: '/tool/:toolid',
      name: 'tool',
      props: true,
      component: () => import('@views/Tool.vue')
    }
  ],
  parseQuery: (query) => {
    return window.Qs.parse(query);
  },
  stringifyQuery(query) {
      let result = window.Qs.stringify(query, {encode: false});

      return result ? ('?' + result) : '';
  }
});

export default router;