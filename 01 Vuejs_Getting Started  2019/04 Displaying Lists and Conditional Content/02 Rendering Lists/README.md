# 02 Rendering Lists
### Render a List

- Iterate over a list of items in a model with **v-for="item in item_list"**
- **v-for** iterate the model
- Repeats the HTML content for each item in the list
- Bind a unique **:key**, for faster rendering

```html
        <ul class="list is-hoverable">
          <li v-for="hero in heroes" :key="hero.id">
            <a class="list-item">
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
      selectedHero: {
        id: 111,
        firstName: '...',
        lastName: '...',
        description: '...',
      },
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