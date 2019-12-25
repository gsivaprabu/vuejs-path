# 03 Selecting and Highlighting Items from a List

```html
        <ul class="list is-hoverable">
          <li v-for="hero in heroes" :key="hero.id">
            <a class="list-item" @click="selectedHero = hero"
            :class="{'is-active':selectedHero===hero}">
              <span>{{hero.firstName}}</span>
            </a>
          </li>
        </ul>
```

```javascript
export default {
  name: 'Heroes',
  data() {
    return {
      selectedHero: {},
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