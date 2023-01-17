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
    isSearch: false,
  },
  getters: {
    slicedIds: ({ top250Ids }) => (from, to) => top250Ids.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
    moviesList: ({ movies }) => movies,
    moviesTotal: ({ top250Ids }) => Object.keys(top250Ids).length,
    top250Ids: ({ top250Ids }) => top250Ids,
    isSearch: ({ isSearch }) => isSearch,
  },
  mutations: {
    setMovies(state, value) {
      state.movies = value;
    },
    setCurrentPage(state, value) {
      state.currentPage = value;
    },
    removeMovie(state, index) {
      state.top250Ids.splice(index, 1);
    },
    setIsSearch(state, value) {
      state.isSearch = value;
    },
  },
  actions: {
    initMoviesStore: {
      handler({ dispatch }) {
        dispatch('fetchMovies');
      },
      root: true,
    },
    async fetchMovies({ getters: { currentPage, moviesPerPage, slicedIds }, commit, dispatch }) {
      try {
        dispatch('loaderHandler', true, { root: true });
        const from = (currentPage * moviesPerPage) - moviesPerPage;
        const to = currentPage * moviesPerPage;
        const requests = slicedIds(from, to).map((id) => axiosInstance.get(`/?i=${id}`));
        const resp = await Promise.all(requests);
        const formattedData = formatRespData(resp);
        commit('setMovies', formattedData);
      } catch (err) {
        console.log(err);
      } finally {
        dispatch('loaderHandler', false, { root: true });
      }
    },
    changePage({ commit, dispatch }, page) {
      commit('setCurrentPage', page);
      dispatch('fetchMovies');
    },
    removeMovie({ commit, dispatch, getters }, id) {
      const index = getters.top250Ids.findIndex((item) => item === id);
      if (index !== -1) {
        commit('removeMovie', index);
        dispatch('fetchMovies');
      }
    },
    async searchMovie({ dispatch, commit }, query) {
      try {
        dispatch('loaderHandler', true, { root: true });
        const resp = await axiosInstance.get(`/?s=${query}`);
        if (resp.Error) {
          throw Error(resp.Error);
        }
        const formattedData = formatRespData(resp.Search);
        commit('setMovies', formattedData);

        console.log(formattedData);
      } catch (err) {
        console.log(err.message);
      } finally {
        dispatch('loaderHandler', false, { root: true });
      }
    },
    toggleIsSearch({ commit }, isSearch) {
      commit('setIsSearch', isSearch);
    },
  },
};

export default moviesStore;
