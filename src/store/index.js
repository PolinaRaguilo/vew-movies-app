import { createStore } from 'vuex';
import movies from './modules/movies';
import loader from './modules/loader';

const store = createStore({
  modules: {
    movies,
    loader,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});

store.dispatch('initMoviesStore');

export default store;
