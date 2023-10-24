/* eslint-disable */
<template>
  <!-- Componente de login -->
  <div class="login">
    <Login />
  </div>
</template>

<script>
import Login from '@/components/Auth/LoginForm.vue';

export default {
  components: {
    Login,
  },
};
</script>

<style scoped>
/* Estilo do componente de login */
.login {
  margin-top: 350px;
}
</style>
