import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Events from "../views/Events.vue";
import Courses from "../views/Courses.vue";
import Gifts from "../views/Gifts.vue";
import AboutUs from "../views/About.vue";
import Faq from "../views/Faq.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/UserEvents',
      name: 'events',
      component: Events
    },
    {
      path: '/UserCoursesView',
      name: 'courses',
      component: Courses
    },
    {
      path: '/UserGiftsView',
      name: 'gifts',
      component: Gifts
    },
    {
      path: '/AboutUs',
      name: 'about',
      component: AboutUs
    },
    {
      path: '/Faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: LoginPage
    },
    {
      path: '/registerPage',
      name: 'registerPage',
      component: RegisterPage
    }
  ]
})

export default router
