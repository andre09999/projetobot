/* eslint-disable */
<template>
  <main class="login-page">
    <section class="login-card" aria-labelledby="login-title">
      <div class="brand-icon" aria-hidden="true">✈</div>
      <p class="eyebrow">Integração com Telegram</p>
      <h1 id="login-title">Acesse o painel do bot</h1>
      <p class="intro">
        Informe o token do bot e o ID da conversa que será administrada.
      </p>

      <form @submit.prevent="handleSubmit">
        <div class="field">
          <label for="codeBot">Token do bot (Codebot)</label>
          <input
            id="codeBot"
            v-model.trim="codeBot"
            type="password"
            autocomplete="off"
            placeholder="123456789:AA..."
            required
          />
          <small>Token secreto fornecido pelo @BotFather.</small>
        </div>

        <div class="field">
          <label for="botID">ID da conversa (Chat ID)</label>
          <input
            id="botID"
            v-model.trim="botId"
            type="text"
            inputmode="numeric"
            placeholder="Ex.: 123456789"
            required
          />
          <small>Número da conversa que enviará e receberá mensagens.</small>
        </div>

        <p v-if="errorMessage" class="error-message" role="alert">
          {{ errorMessage }}
        </p>

        <button class="primary-button" type="submit" :disabled="loading">
          {{ loading ? 'Conectando...' : 'Conectar ao Telegram' }}
        </button>
      </form>

      <div class="divider"><span>ou</span></div>

      <button class="demo-button" type="button" @click="startDemo">
        Acessar demonstração
      </button>
      <p class="demo-note">Não exige token e não envia mensagens reais.</p>

      <details class="instructions">
        <summary>Como conseguir o Codebot e o ID?</summary>
        <ol>
          <li>No Telegram, abra <strong>@BotFather</strong> e envie <code>/newbot</code>.</li>
          <li>Conclua a criação e copie o token exibido. Esse é o <strong>Codebot</strong>.</li>
          <li>Abra o bot criado e envie <code>/start</code>.</li>
          <li>O bot responderá com o número da conversa. Esse é o <strong>Chat ID</strong>.</li>
        </ol>
        <p class="security-note">
          Nunca publique o token em prints, commits ou mensagens. Se ele vazar, gere outro no @BotFather.
        </p>
      </details>
    </section>
  </main>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      codeBot: '',
      botId: '',
      loading: false,
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions('login', ['setCodeBot', 'setBotId']),
    async handleSubmit() {
      this.loading = true;
      this.errorMessage = '';
      sessionStorage.removeItem('demoMode');

      const config = {
        headers: {
          Authorization: 'ARVORE',
        },
      };

      try {
        const response = await axios.post(
          'https://projectbot-5xtl.onrender.com/login',
          { botCode: this.codeBot },
          config
        );

        if (response.status === 200) {
          await this.setCodeBot(this.codeBot);
          await this.setBotId(this.botId);
          this.$router.push('/app');
        }
      } catch (error) {
        console.error('Erro ao conectar ao Telegram:', error);
        this.errorMessage = 'Não foi possível conectar. Confira o token e tente novamente.';
      } finally {
        this.loading = false;
      }
    },
    async startDemo() {
      sessionStorage.setItem('demoMode', 'true');
      await this.setCodeBot('DEMO');
      await this.setBotId('123456789');
      this.$router.push('/app');
    },
  },
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  box-sizing: border-box;
}

.login-card {
  width: min(100%, 480px);
  padding: 36px;
  border: 1px solid #dce3ee;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
  text-align: left;
}

.brand-icon {
  display: grid;
  width: 48px;
  height: 48px;
  margin-bottom: 18px;
  place-items: center;
  border-radius: 14px;
  background: #229ed9;
  color: #ffffff;
  font-size: 24px;
}

.eyebrow {
  margin: 0 0 6px;
  color: #1679a7;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  color: #172033;
  font-size: clamp(1.65rem, 5vw, 2rem);
  line-height: 1.2;
}

.intro {
  margin: 10px 0 26px;
  color: #5b6473;
  line-height: 1.55;
}

form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

label {
  color: #263247;
  font-size: 0.92rem;
  font-weight: 700;
}

input {
  min-height: 46px;
  padding: 0 14px;
  border: 1px solid #c9d2df;
  border-radius: 10px;
  background: #fbfcfe;
  color: #172033;
  font-size: 1rem;
  text-align: left;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus {
  border-color: #229ed9;
  box-shadow: 0 0 0 3px rgba(34, 158, 217, 0.16);
  outline: none;
}

small,
.demo-note {
  color: #727c8d;
  font-size: 0.78rem;
}

button {
  min-height: 46px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s, background 0.2s;
}

button:hover:not(:disabled) {
  transform: translateY(-1px);
}

button:disabled {
  cursor: wait;
  opacity: 0.7;
}

.primary-button {
  border: 1px solid #229ed9;
  background: #229ed9;
  color: #ffffff;
}

.primary-button:hover:not(:disabled) {
  background: #1688bd;
}

.demo-button {
  width: 100%;
  border: 1px solid #229ed9;
  background: #eff9fe;
  color: #1679a7;
}

.demo-note {
  margin: 8px 0 0;
  text-align: center;
}

.divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
  color: #8a94a3;
  font-size: 0.8rem;
}

.divider::before,
.divider::after {
  height: 1px;
  flex: 1;
  background: #e3e8ef;
  content: '';
}

.error-message {
  margin: 0;
  padding: 10px 12px;
  border-radius: 8px;
  background: #fff1f1;
  color: #b42318;
  font-size: 0.86rem;
}

.instructions {
  margin-top: 24px;
  border-top: 1px solid #e3e8ef;
  padding-top: 20px;
  color: #445065;
}

summary {
  color: #263247;
  font-weight: 700;
  cursor: pointer;
}

ol {
  margin: 16px 0 0;
  padding-left: 22px;
}

li {
  margin-bottom: 9px;
  line-height: 1.45;
}

code {
  padding: 2px 5px;
  border-radius: 5px;
  background: #eef2f6;
}

.security-note {
  margin: 14px 0 0;
  padding: 10px 12px;
  border-left: 3px solid #f5a524;
  background: #fff9eb;
  font-size: 0.82rem;
  line-height: 1.45;
}

@media (max-width: 520px) {
  .login-page {
    padding: 16px;
  }

  .login-card {
    padding: 26px 20px;
  }
}
</style>
