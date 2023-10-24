<template>
  <div class="header">
    <button @click="handleLogout">Sair</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    handleLogout() {
      const codeBot = sessionStorage.getItem('codeBot');
      const chatId = sessionStorage.getItem('botId');
      sessionStorage.clear();
      this.$store.dispatch('messageList/clearReceivedMessages');
      const config = {
        headers: {
          Authorization: 'ARVORE',
        },
      };

      axios.post('http://localhost:3000/exit', { code: codeBot, chatId: chatId }, config)
        .then(response => {
          console.log(response);
          this.$router.push('/');
        })
        .catch(error => {
          alert('Erro ao tentar sair. Verifique sua conexão com a internet.', error);
        });
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
}

.header button {
  padding: 8px 16px;
  font-size: 14px;
  background-color: #ff6347;
  color: #fff;
  border: none;
  cursor: pointer;
}

.header button:hover {
  background-color: #d9534f;
}
</style>
