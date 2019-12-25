# 06 Checkbox Radio Buttons and Style Bindings

- Binding with radio buttons
- **v-bind** use to bind the model

```html
              <div class="field">
                <label class="label">cape color</label>
                <label class="radio" for="color-red">
                  <input type="radio" id="color-red" value="red" v-model="hero.capeColor" />
                  red
                </label>
                <label class="radio" for="color-blue">
                  <input type="radio" id="color-blue" value="blue" v-model="hero.capeColor" />
                  blue
                </label>
                <label class="radio" for="color-green">
                  <input type="radio" id="color-green" value="green" v-model="hero.capeColor" />
                  green
                </label>
                <div class="color-line" v-bind:style="{ 'background-color':hero.capeColor}"></div>
              </div>


              <div class="field">
                <label class="checkbox" for="active">
                  active
                  <input type="checkbox" class="is-primary" id="active" v-model="hero.active" />
                </label>
              </div>              
```