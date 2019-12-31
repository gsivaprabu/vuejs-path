# 04 Adding and Removing Content

- Display content based on an expression
- Content is added or removed from the DOM
- set the **v-if** directive to an expression that evaluates to truthy or falsey
- If value true then only added in DOM otherwise not added
- Check the Dev tool for run time

```javascript
export default {
  name: 'Heroes',
  data() {
    return {
      selectedHero: undefined,
      heroes: [
        {
          id: 10,
          firstName: 'Ella',
          lastName: 'Papa',
          description: 'fashionista',
        },
        {
          id: 20,
          firstName: 'Madelyn',
          lastName: 'Papa',
          description: 'the cat whisperer',
        },
        {
          id: 30,
          firstName: 'Haley',
          lastName: 'Papa',
          description: 'pen wielder',
        },
        {
          id: 40,
          firstName: 'Landon',
          lastName: 'Papa',
          description: 'arc trooper',
        },
      ],
    };
  },
};
```


```html
<div class="columns" v-if="selectedHero">
      <div class="column is-3">
        <header class="card-header">
          <p class="card-header-title">{{ selectedHero.firstName }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label" for="id">id</label>
              <label class="input" id="id" readonly>{{ selectedHero.id }}</label>
            </div>
            <div class="field">
              <label class="label" for="firstName">first name</label>
              <input class="input" id="firstName" v-model="selectedHero.firstName" />
            </div>
            <div class="field">
              <label class="label" for="lastName">last name</label>
              <input class="input" id="lastName" v-model="selectedHero.lastName" />
            </div>
            <div class="field">
              <label class="label" for="description">description</label>
              <input class="input" id="description" v-model="selectedHero.description" />
            </div>
          </div>
        </div>
      </div>
</div>
```