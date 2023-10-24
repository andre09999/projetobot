import { createStore } from 'vuex';
import login from './LoginForm'; 
import telaPrincipal from './TelaPrincipal';
import messageList from './MessageList';

const actions = {
  saveSentMessage({ commit }, message) {
    commit('SAVE_SENT_MESSAGE', message);
  },
};

const mutations = {
  SAVE_SENT_MESSAGE(state, message) {
    console.log(state,message);
    state.sentMessages.push(message);
  },
};

export default createStore({
  modules: {
    login,
    telaPrincipal,
    messageList,
  },
  actions, // Adicionado o objeto de ações aqui
  mutations, // Adicionado o objeto de mutações aqui
});
