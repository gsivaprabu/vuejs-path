# 05 Showing and Hiding Content
- Show or Hide content
- Does not remove from the DOM
- use **v-show==expression**
- Show or hide the content based on expression
- This would not worked when your selectedHero is undefined



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
              <label for="show" class="checkbox">
                Show More >>
                <input type="checkbox" class="is-primary" id="show" v-model="showMore" />
              </label>
            </div>
            <div class="field" v-show="showMore">
              <label class="label" for="lastName">last name</label>
              <input class="input" id="lastName" v-model="selectedHero.lastName" />
            </div>
            <div class="field" v-show="showMore">
              <label class="label" for="description">description</label>
              <input class="input" id="description" v-model="selectedHero.description" />
            </div>
          </div>
        </div>
      </div>
    </div>
```

```javascript
export default {
  name: 'Heroes',
  data() {
    return {
      selectedHero: undefined,
      showMore: false,
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