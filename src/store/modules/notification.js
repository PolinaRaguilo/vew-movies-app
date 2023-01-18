const notificationStore = {
  state: { message: {} },
  getters: { message: ({ message }) => message },
  mutations: {
    setMessage(state, msg) {
      state.message = msg;
    },
  },
  actions: {
    showNotify({ commit }, msg) {
      commit('setMessage', msg);
    },
  },
};

export default notificationStore;
