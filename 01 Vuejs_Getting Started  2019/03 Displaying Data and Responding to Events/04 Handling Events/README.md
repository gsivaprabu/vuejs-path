# 04 Handling Events

- Execute when an event occurs
- v-on:event="method-name"
- **@** is the shortcut syntax of **v-on**


Adding handlers

```javascript
export default {
  name: 'Heroes',
  data() {
    return {
      hero: {
        id: 20,
        firstName: 'MadeLyn',
        lastName: 'Papa',
        description: 'the cat whisperer',
        capeColor: '',
        power: '',
        active: true,
      },
      message: 'Default messsage while click the save button data populated',
    };
  },
  methods: {
    cancelHero() {
      this.message = 'Trigger Cancel()';
    },
    saveHero() {
      this.message = JSON.stringify(this.hero, null, '\n');
    },
  },
};
```

HTML onclick event trigger

```html
<button class="link card-footer-item cancel-button" @click="cancelHero()">
 <i class="fas fa-undo"></i>
 <span>Cancel</span>
</button>

<button class="link card-footer-item" @click="saveHero()">
  <i class="fas fa-save"></i>
  <span>Save</span>
</button>

<pre>{{message}}</pre>
```