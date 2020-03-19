# Eager and Lazy Loading

- Eager and Lazy loading
- Separate bundle / chunk
- If give same bundle name means they loaded together
- router based bundle the source
- component using arrow function (=>)

```javascript
{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: About,
      component: () =>
        import(/* webpackChunkName: "bundle-about" */ './views/about.vue'),
    },
```
