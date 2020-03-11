# Defining and Passing Route Parameters

[https://router.vuejs.org/api/#router-link](https://router.vuejs.org/api/#router-link)

- How to pass routing parameters

```javascript
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
      props: true,
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
```
## In  HeroDetail view

```html
<router-link
:to="{ name: 'hero-detail', params: { id: hero.id } }"
    tag="button"
    class="link card-footer-item"
>
    <i class="fas fa-check"></i>
    <span>Select</span>
</router-link>
```          