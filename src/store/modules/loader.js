const loaderStore = {
  state: {
    isShowLoader: false,
  },
  getters: {
    isShowLoader: ({ isShowLoader }) => isShowLoader,
  },
  mutations: {
    toggleLoader(state, value) {
      state.isShowLoader = value;
    },
  },
  actions: {
    loaderHandler({ commit }, value) {
      commit('toggleLoader', value);
    },
  },
};

export default loaderStore;
