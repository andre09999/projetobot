const state = {
  isLoggedIn: false,
  codeBot: '',
};

const mutations = {
  SET_CODE_BOT(state, codeBot) {
    state.codeBot = codeBot;
  },
  SET_LOGGED_IN(state, loggedIn) {
    state.isLoggedIn = loggedIn;
  },
};

const actions = {
  login({ commit }) {
    const isLoggedIn = true;
    commit('SET_LOGGED_IN', isLoggedIn);
    sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  },
  setCodeBot({ commit }, codeBot) {
    commit('SET_CODE_BOT', codeBot);
    sessionStorage.setItem('codeBot', codeBot);
  },
  setBotId({ commit }, botId) {
    commit('SET_BOT_ID', botId);
    sessionStorage.setItem('botId', botId);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
