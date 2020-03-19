import Vue from 'vue';
import Router from 'vue-router';
import Heroes from './views/heroes.vue';
import About from './views/about.vue';
import HeroDetail from './views/hero-detail.vue';

Vue.use(Router);

// Convert string to integer
const parsePars = r => ({ id: parseInt(r.params.id) });

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'heroes',
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: Heroes,
    },
    {
      path: '/heroes/:id',
      name: 'hero-detail',
      component: HeroDetail,
      // props: true,
      props: parsePars,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
  ],
});
