/* eslint-disable */
<template>
  <div class="header">
    <div class="brand">
      <span class="brand-mark" aria-hidden="true">✈</span>
      <span>ProjetoBot</span>
    </div>
    <button @click="handleLogout">Sair</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async handleLogout() {
      const isDemo = sessionStorage.getItem('demoMode') === 'true';
      const codeBot = sessionStorage.getItem('codeBot');
      const chatId = sessionStorage.getItem('botId');
      sessionStorage.clear();
      this.$store.dispatch('messageList/clearReceivedMessages');

      if (isDemo) {
        this.$router.push('/');
        return;
      }

      const config = {
        headers: {
          Authorization: 'ARVORE',
        },
      };

      try {
        await axios.post(
          'https://projectbot-5xtl.onrender.com/exit',
          { code: codeBot, chatId: chatId },
          config
        );
      } catch (error) {
        console.error('Erro ao encerrar a sessão no servidor:', error);
      } finally {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
  padding: 0 max(20px, calc((100% - 820px) / 2));
  background: #172033;
  color: #fff;
}

.brand {
  display: flex;
  align-items: center;
  gap: 9px;
  font-weight: 800;
}

.brand-mark {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border-radius: 9px;
  background: #229ed9;
}

.header button {
  min-height: 38px;
  padding: 0 16px;
  font-size: 14px;
  background: transparent;
  color: #fff;
  border: 1px solid #667085;
  border-radius: 8px;
  cursor: pointer;
}

.header button:hover {
  background: rgba(255, 255, 255, 0.08);
}
</style>
