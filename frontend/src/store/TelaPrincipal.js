// Definindo o estado do módulo
const state = {
  mensagem: '',
};

// Definindo as mutações para modificar o estado
const mutations = {
  SET_MENSAGEM(state, mensagem) {
    state.mensagem = mensagem;
  },
};

// Definindo as ações para interagir com o estado
const actions = {
  setMensagem({ commit }, mensagem) {
    commit('SET_MENSAGEM', mensagem);
  },
};

// Exportando o módulo Vuex
export default {
  namespaced: true, // Permite que o módulo tenha um namespace
  state,
  mutations,
  actions,
};
