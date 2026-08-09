/* eslint-disable */
<template>
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
.login {
  min-height: 100vh;
}
</style>
