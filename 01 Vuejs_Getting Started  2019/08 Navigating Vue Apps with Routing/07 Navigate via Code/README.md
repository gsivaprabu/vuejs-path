# Navigate via Code

- route using Navigation

```javascript
this.$router.push({ name: 'heroes' });
```

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

```html
      <p>
        by
        <a href="http://twitter.com/john_papa">John Papa</a>
      </p>
```
