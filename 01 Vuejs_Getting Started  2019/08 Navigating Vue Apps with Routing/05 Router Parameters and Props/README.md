# Router Parameters and Props

- Because of string that router parameter as string "10" to 10

```javascript
// Convert string to integer
const parsePars = r => ({ id: parseInt(r.params.id) });

    {
      path: '/heroes/:id',
      name: 'hero-detail',
      component: HeroDetail,
      // props: true,
      props: parsePars,
    },
```
