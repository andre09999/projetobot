const state = {
  messages: [],
};

const mutations = {
  SET_MESSAGES(state, messages) {
    state.messages = messages;
  },
  ADD_SENT_MESSAGE(state, message) {
    state.messages.push(message);
  },
  ADD_RECEIVED_MESSAGE(state, message) {
    state.messages.push(message);
  },
  CLEAR_RECEIVED_MESSAGES(state) {
    state.messages = [];
  },
};

const actions = {
  setMessages({ commit }, messages) {
    commit('SET_MESSAGES', messages);
  },
  addSentMessage({ commit }, message) {
    commit('ADD_SENT_MESSAGE', message);
  },
  addReceivedMessage({ commit }, message) {
    commit('ADD_RECEIVED_MESSAGE', message);
  },
  clearReceivedMessages({ commit }) {
    commit('CLEAR_RECEIVED_MESSAGES');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
