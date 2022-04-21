import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from "../components/Home.vue";
import Auth from '../components/Auth.vue';
import Register from '../components/Register.vue';
const routes= [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },

  {
    path:'/auth',
    name:'Auth',
    component: Auth
  },
  {
    path:'/register',
    name:'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
