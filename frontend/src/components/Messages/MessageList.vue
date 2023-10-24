<template>
  <div>
    <ul v-if="messages && messages.length > 0" class="message-list">
      <li v-for="(message, index) in messages" :key="index" :class="isSentMessage(message) ? 'sent-message' : 'left'">
        <strong v-if="isSentMessage(message)" >{{ message.text }} : {{ message.from.first_name }}</strong>
        <strong v-else>{{ message.from.first_name }} :  {{ message.text }}</strong>
      </li>
    </ul>
    <div v-else class="message-list2">
      <p class="para">Não há mensagens disponíveis.</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export default {
  data() {
    return {
      novaMensagem: '',
    };
  },
  computed: {
    ...mapState('messageList', ['messages']),
  },
  methods: {
    ...mapMutations('messageList', ['ADD_SENT_MESSAGE', 'ADD_RECEIVED_MESSAGE']),
    isSentMessage(message) {
      const senderName = message.from && message.from.first_name;
      return senderName !== 'Você';
    },
    enviarMensagem() {
      const novaMensagem = {
        from: { first_name: 'Você' },
        text: this.novaMensagem
      };
      this.ADD_SENT_MESSAGE(novaMensagem);
      socket.emit('send-message', { message: novaMensagem });
      this.novaMensagem = '';
    },
  },
  created() {
    socket.on('new-message', (data) => {
      this.ADD_RECEIVED_MESSAGE(data); 
    });
  },
};
</script>

<style scoped>
.message-list {
  margin: auto;
  border: 1px solid black;
  height: 450px;
  width: 500px;
  overflow-y: auto;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}

.message-list2 {
  margin: auto;
  border: 1px solid black;
  height: 450px;
  width: 500px;
  overflow-y: auto;
  background-color: white;
  border-radius: 15px;
}

.sent-message {
  text-align: right;
  margin-right: 30px;
  margin-bottom: 10px;
}

.left {
  text-align: left;
  margin-left: 30px;
  margin-bottom: 10px;
}

.para {
  margin-top: 200px;
}
</style>
