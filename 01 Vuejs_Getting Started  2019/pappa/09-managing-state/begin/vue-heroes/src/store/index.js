import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  /*  heroes: [
    { id: 1, firstName: 'Holly', lastName: 'Smith', description: 'hello' },
  ], */
  heroes: [],
};
const mutations = {};
const actions = {};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
