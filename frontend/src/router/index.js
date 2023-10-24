import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginForm.vue'
import Apps from '../views/TelaPrincipal'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/app',
    name: 'app',
    component: Apps
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
