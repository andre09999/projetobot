/* eslint-disable */
<template>
  <section class="messages-panel" aria-label="Mensagens da conversa">
    <ul v-if="messages && messages.length > 0" class="message-list">
      <li
        v-for="(message, index) in messages"
        :key="index"
        :class="isSentMessage(message) ? 'sent-message' : 'received-message'"
      >
        <span class="sender">{{ message.from.first_name }}</span>
        <span>{{ message.text }}</span>
      </li>
    </ul>
    <div v-else class="empty-state">
      <p>Nenhuma mensagem disponível.</p>
      <small>As novas mensagens aparecerão aqui.</small>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import io from 'socket.io-client';

export default {
  data() {
    return {
      novaMensagem: '',
      socket: null,
    };
  },
  computed: {
    ...mapState('messageList', ['messages']),
  },
  methods: {
    ...mapMutations('messageList', ['ADD_SENT_MESSAGE', 'ADD_RECEIVED_MESSAGE']),
    isSentMessage(message) {
      const senderName = message.from && message.from.first_name;
      return senderName === 'Você';
    },
    enviarMensagem() {
      const novaMensagem = {
        from: { first_name: 'Você' },
        text: this.novaMensagem
      };
      this.ADD_SENT_MESSAGE(novaMensagem);
      if (this.socket) {
        this.socket.emit('send-message', { message: novaMensagem });
      }
      this.novaMensagem = '';
    },
  },
  created() {
    if (sessionStorage.getItem('demoMode') === 'true') return;

    this.socket = io('https://projectbot-5xtl.onrender.com/');
    this.socket.on('new-message', (data) => {
      this.ADD_RECEIVED_MESSAGE(data); 
    });
  },
  beforeUnmount() {
    if (this.socket) this.socket.disconnect();
  },
};
</script>

<style scoped>
.messages-panel {
  overflow: hidden;
  border: 1px solid #dce3ee;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 12px 34px rgba(15, 23, 42, 0.08);
}

.message-list {
  height: 430px;
  margin: 0;
  padding: 22px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
}

.message-list li {
  width: fit-content;
  max-width: min(78%, 560px);
  padding: 10px 13px;
  border-radius: 12px;
  line-height: 1.45;
  text-align: left;
  word-break: break-word;
}

.sent-message {
  align-self: flex-end;
  border-bottom-right-radius: 3px !important;
  background: #229ed9;
  color: #ffffff;
}

.received-message {
  align-self: flex-start;
  border-bottom-left-radius: 3px !important;
  background: #eef2f6;
  color: #263247;
}

.sender {
  display: block;
  margin-bottom: 3px;
  font-size: 0.72rem;
  font-weight: 800;
  opacity: 0.76;
}

.empty-state {
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #657084;
}

.empty-state p {
  margin: 0 0 4px;
  font-weight: 700;
}
</style>
