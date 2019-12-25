# 05 Accepting user input with Two Way binding
- hero.firstNmae showns in the input
- The use types and the value of hero.firstName changes
-  **v-model** is called two way binding
-  change all input types


```html
             <div class="field">
                <label class="label" for="firstName">first name</label>
                <input class="input" id="firstName" v-model="hero.firstName" />
              </div>
              <div class="field">
                <label class="label" for="lastName">last name</label>
                <input class="input" id="lastName" v-model="hero.lastName" />
              </div>
              <div class="field">
                <label class="label" for="description">description</label>
                <textarea class="input" id="description" type="text" v-model="hero.description" />
              </div>
```