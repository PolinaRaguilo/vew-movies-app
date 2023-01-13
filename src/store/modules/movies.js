import axiosInstance from '@/axios';
import { formatRespData } from '@/helpers';
import movieIds from '../mocks/imdb250';

const moviesStore = {
  namespaced: true,
  state: {
    top250Ids: movieIds,
    moviesPerPage: 12,
    currentPage: 1,
    movies: {},
  },
  getters: {
    slicedIds: ({ top250Ids }) => (from, to) => top250Ids.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
  },
  mutations: {
    setMovies(state, value) {
      state.movies = value;
    },
  },
  actions: {
    async fetchMovies({ getters: { currentPage, moviesPerPage, slicedIds }, commit }) {
      try {
        const from = (currentPage * moviesPerPage) - moviesPerPage;
        const to = currentPage * moviesPerPage;
        const requests = slicedIds(from, to).map((id) => axiosInstance.get(`/?i=${id}`));
        const resp = await Promise.all(requests);
        const formattedData = formatRespData(resp);
        commit('setMovies', formattedData);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default moviesStore;
