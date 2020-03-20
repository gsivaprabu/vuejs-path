# Mutating State

## Mutations
- Synchronous operations to modify your state

```javascript

import {
  ADD_HERO,
  DELETE_HERO,
  GET_HEROES,
  UPDATE_HERO,
} from './mutation-types';



const mutations = {
  [ADD_HERO](state, hero) {
    state.heroes.push(hero); // mutable addition
  },
  [UPDATE_HERO](state, hero) {
    const index = state.heroes.findIndex(h => h.id === hero.id);
    state.heroes.splice(index, 1, hero);
    state.heroes = [...state.heroes];
  },
  [GET_HEROES](state, heroes) {
    state.heroes = heroes;
  },
  [DELETE_HERO](state, hero) {
    state.heroes = [...state.heroes.filter(p => p.id !== hero.id)];
  },
};
```

```javascript
export const ADD_HERO = 'addHeroe';
export const UPDATE_HERO = 'updateHeroe';
export const GET_HEROES = 'getHeroes';
export const DELETE_HERO = 'deleteHeroe';

```