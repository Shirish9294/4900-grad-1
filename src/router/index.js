import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from "../components/Home.vue";
import AuthPage from '../components/Auth.vue';
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
    component: AuthPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
