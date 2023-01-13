import { createStore } from 'vuex';
import movies from './modules/movies';

const store = createStore({
  modules: {
    movies,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {

  },
});

store.dispatch('initMoviesStore');

export default store;
