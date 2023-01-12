import axiosInstance from '@/axios';
import { createStore } from 'vuex';
import movies from './modules/movies';

export default createStore({
  modules: {
    movies,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchMovies(context) {
      console.log(context);
      const resp = await axiosInstance.get('/?i=tt1285016');
      console.log(resp);
    },
  },
});
