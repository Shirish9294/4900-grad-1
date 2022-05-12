import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from "../components/Home.vue";
import Auth from '../components/Auth.vue';
import Register from '../components/Register.vue';
import MovieList from "../components/MovieList";
import MovieCreate from "../components/MovieCreate";
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
  },
  {
    path:'/movie-list',
    name:'MovieList',
    component: MovieList
  },
  {
    path: "/movie-create",
    name: "MovieCreate",
    component: MovieCreate,
  },
  {
    path: "/movie-create/:pk",
    name: "MovieUpdate",
    component: MovieCreate,
  },  {
    path: "/movie-list/:msg",
    name: "MovieUpdatedList",
    component: MovieList,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
