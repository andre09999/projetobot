<template>
  <div class="log">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <label for="codeBot">Your code bot:</label>
      <input type="text" v-model="codeBot" required />
      <label for="botID">Coloque o id da conversa que quer acessar:</label>
      <input type="text" v-model="botId" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      codeBot: '',
      botId: '',
    };
  },
  methods: {
    ...mapActions('login', ['setCodeBot', 'setBotId']),
    async handleSubmit() {
      await this.setCodeBot(this.codeBot);
      await this.setBotId(this.botId);
      sessionStorage.setItem('codeBot', this.codeBot);
      sessionStorage.setItem('botId', this.botId);

      const config = {
        headers: {
          Authorization: 'ARVORE',
        },
      };

      axios.post('https://projectbot-5xtl.onrender.com//login', { botCode: this.codeBot }, config)
        .then(response => {
          if (response.status === 200) {
            this.$router.push('/app');
          }
        })
        .catch(error => {
          console.log(error);
          alert('Erro ao fazer login. Por favor, tente novamente.');
        });
    }    
  },
};
</script>

<style scoped>
.log {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
form {
  display: flex;
  gap: 15px;
}
button {
  background-color: transparent;
  padding: 5px;
  border-radius: 10px;
}
</style>
