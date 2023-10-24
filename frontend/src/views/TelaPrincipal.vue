/* eslint-disable */
<template>
  <div class="principal">
    <!-- Componente do cabeçalho -->
    <HeaderComp />

    <h2>Tela Principal</h2>

    <!-- Lista de mensagens -->
    <MessageList />

    <!-- Formulário para enviar mensagens -->
    <form @submit.prevent="enviarMensagem" class="form">
      <div class="input">
        <label for="mensagem">Mensagem:</label>
        <input type="text" class="input-field" v-model="mensagem" required />
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import MessageList from '@/components/Messages/MessageList.vue';
import HeaderComp from '@/components/Header/HeaderComp.vue';
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      mensagem: '',
    };
  },
  methods: {
    ...mapActions('messageList', ['addSentMessage']),

    async enviarMensagem() {
      const codeBot = sessionStorage.getItem('codeBot');
      const chatId = sessionStorage.getItem('botId');

      const config = {
        headers: {
          Authorization: 'ARVORE',
        },
      };

      try {
        const response = await axios.post('https://projectbot-5xtl.onrender.com/send', {
          message: this.mensagem,
          code: codeBot,
          chatId: chatId
        }, config);

        console.log('Mensagem enviada com sucesso!', response.data);

        // Adiciona a mensagem à lista de enviadas
        this.addSentMessage({
          from: { first_name: 'Você' },
          text: this.mensagem
        });

        // Limpa o campo de mensagem
        this.mensagem = '';
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      }
    },

    handleLogout() {
      // Limpa o sessionStorage
      sessionStorage.clear();

      // Redireciona para a página inicial
      this.$router.push('/');
    },
  },
  components: {
    MessageList,
    HeaderComp,
  },
};
</script>

<style scoped>
/* Estilo do formulário */
.form {
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

/* Estilo do botão */
button {
  background-color: transparent;
  padding: 3px;
  border-radius: 10px;
}

/* Estilo do campo de input */
.input-field {
  width: 50vw;
  height: 25px;
}

/* Estilo do componente principal */
.principal {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
