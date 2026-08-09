/* eslint-disable */
<template>
  <div class="principal">
    <HeaderComp />

    <main class="content">
      <div class="title-row">
        <div>
          <p class="eyebrow">Central de mensagens</p>
          <h1>Painel do Telegram</h1>
        </div>
        <span v-if="isDemo" class="demo-badge">Modo demonstração</span>
      </div>

      <p v-if="isDemo" class="demo-alert">
        Ambiente de simulação: as mensagens ficam somente neste navegador e não são enviadas ao Telegram.
      </p>

      <MessageList />

      <form @submit.prevent="enviarMensagem" class="form">
        <label class="sr-only" for="mensagem">Mensagem</label>
        <input
          id="mensagem"
          v-model.trim="mensagem"
          type="text"
          class="input-field"
          placeholder="Digite uma mensagem..."
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </main>
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
  computed: {
    isDemo() {
      return sessionStorage.getItem('demoMode') === 'true';
    },
  },
  methods: {
    ...mapActions('messageList', ['addSentMessage', 'addReceivedMessage', 'setMessages']),

    async enviarMensagem() {
      if (this.isDemo) {
        this.addSentMessage({
          from: { first_name: 'Você' },
          text: this.mensagem,
        });

        this.addReceivedMessage({
          from: { first_name: 'Bot Demo' },
          text: 'Mensagem recebida na simulação. Nenhum dado foi enviado ao Telegram.',
        });
        this.mensagem = '';
        return;
      }

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

        this.addSentMessage({
          from: { first_name: 'Você' },
          text: this.mensagem
        });

        this.mensagem = '';
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      }
    },

  },
  mounted() {
    if (this.isDemo) {
      this.setMessages([
        {
          from: { first_name: 'Bot Demo' },
          text: 'Olá! Esta é uma conversa simulada para apresentar o funcionamento do painel.',
        },
        {
          from: { first_name: 'Você' },
          text: 'Perfeito. Assim posso testar sem informar um token real.',
        },
      ]);
    }
  },
  components: {
    MessageList,
    HeaderComp,
  },
};
</script>

<style scoped>
.principal {
  min-height: 100vh;
  color: #172033;
}

.content {
  width: min(100% - 32px, 820px);
  margin: 0 auto;
  padding: 38px 0 48px;
}

.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
  text-align: left;
}

.eyebrow {
  margin: 0 0 4px;
  color: #1679a7;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(1.65rem, 5vw, 2.1rem);
}

.demo-badge {
  padding: 8px 12px;
  border: 1px solid #9fd8ef;
  border-radius: 999px;
  background: #eaf8fe;
  color: #116b94;
  font-size: 0.78rem;
  font-weight: 700;
  white-space: nowrap;
}

.demo-alert {
  margin: 0 0 16px;
  padding: 12px 14px;
  border-left: 4px solid #229ed9;
  border-radius: 8px;
  background: #eff9fe;
  color: #28536a;
  font-size: 0.88rem;
  line-height: 1.45;
  text-align: left;
}

.form {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}

button {
  min-height: 46px;
  padding: 0 24px;
  border: 1px solid #229ed9;
  border-radius: 10px;
  background: #229ed9;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
}

.input-field {
  min-width: 0;
  min-height: 46px;
  flex: 1;
  padding: 0 14px;
  border: 1px solid #c9d2df;
  border-radius: 10px;
  background: #ffffff;
  color: #172033;
  font-size: 1rem;
  text-align: left;
}

.input-field:focus {
  border-color: #229ed9;
  box-shadow: 0 0 0 3px rgba(34, 158, 217, 0.16);
  outline: none;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 560px) {
  .title-row {
    align-items: flex-start;
    flex-direction: column;
  }

  .form {
    align-items: stretch;
    flex-direction: column;
  }

  button {
    width: 100%;
  }
}
</style>
