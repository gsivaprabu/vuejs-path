import Vue from 'vue'; // Addd the router to this App
import Router from 'vue-router';
import Heroes from './views/heroes.vue';

Vue.use(Router)

export default new Router({
  mode: 'history', // Enable history mode
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', // Default mode
      name: 'heroes',
      component: Heroes,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
