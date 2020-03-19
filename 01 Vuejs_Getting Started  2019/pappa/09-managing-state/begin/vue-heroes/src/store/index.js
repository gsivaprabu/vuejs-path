import Vue from 'vue';
import Vuex from 'vuex';
import { dataService } from '../shared';
import {
  ADD_HERO,
  DELETE_HERO,
  GET_HEROES,
  UPDATE_HERO,
} from './mutation-types';

Vue.use(Vuex);

const state = {
  /*  heroes: [
    { id: 1, firstName: 'Holly', lastName: 'Smith', description: 'hello' },
  ], */
  heroes: [],
};

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
const actions = {
  async getHeroesAction({ commit }) {
    const heroes = await dataService.getHeroes();
    commit(GET_HEROES, heroes);
  },
};
const getters = {
  getHeroById: state => id => state.heroes.find(h => h.id === id),
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
});
