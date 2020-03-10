# Adding Navigation

## Routing in the template

- The vue-cli  adds the <router-view> and some <router-link> components
- Modify them as you need

### aap.vue

```html
  <div id="app">
    <div id="nav">
        <router-link to="/">Villains<router-link>
        <router-link to="/heroes">Heroes<router-link>
    </div>
    <router-view/> // Put that component that to navigate to here
  </div>
```
