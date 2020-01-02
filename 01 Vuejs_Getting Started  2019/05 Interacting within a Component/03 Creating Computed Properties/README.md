# 03 Creating Computed Properties
- Fire when any dependency value changed
- Cached based on its reactive dependencies
- Only re-evaluates when any of its reactive dependencies have changed

### Computed getter() and setters()

[https://vuejs.org/v2/guide/computed.html](https://vuejs.org/v2/guide/computed.html)



```html
          <header class="card-header">
            <p class="card-header-title">{{ fullName }}</p>
          </header>
```

```javascript
  computed: {
    fullName() {
      return `${this.selectedHero.firstName} ${this.selectedHero.lastName}`;
    }
  },
```