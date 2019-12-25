# 07 Select and Class bindings
### Key modifiers and class bindings
- Key modifier binds to specific event scenarios

[https://vuejs.org/v2/guide/events.html#Key-Modifiers](https://vuejs.org/v2/guide/events.html#Key-Modifiers)

Class binding syntax
```javascript
:class="{class:expression}"
```  

```html
              <div class="field">
                <label for="power">
                  super power
                  <div class="select is-primary">
                    <select
                      id="power"
                      v-model="hero.power"
                      @keyup.esc="clearPower"
                      :class="{invalid:!hero.power}"
                    >
                      <option disabled value>Please select one</option>
                      <option>Speed</option>
                      <option>Flight</option>
                      <option>Strength</option>
                      <option>Invisibility</option>
                    </select>
                  </div>
                </label>
              </div>
```
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
        capeColor: 'gold',
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
    clearPower() {
      this.hero.power = '';
    },
    saveHero() {
      this.message = JSON.stringify(this.hero, null, '\n');
    },
  },
};
```              