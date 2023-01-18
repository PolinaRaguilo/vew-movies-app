import { createStore } from 'vuex';
import movies from './modules/movies';
import loader from './modules/loader';
import notificationStore from './modules/notification';

const store = createStore({
  modules: {
    movies,
    loader,
    notificationStore,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});

export default store;
