# 02 Creating Bindings in the Header Bar

- In header-bar-li
nks.vue page we wrote the logic bind to an HTML property
- **v-bind** syntax
- We can use **v-bind** or **:** only

Below are the example how to return the data

```javascript
<script>
export default{
  name: "HeaderBarLinks",
  data() {
    return {
      github: "https://github.com/johnpapa/vue-getting-started",
      twitter:"https://twitter.com/john_papa"
    }
  },
}
</script>
```

```html
<a v-bind:href="github">
<a :href="github">

```
