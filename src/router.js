import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SecondPage from './components/SecondPage.vue'
import ThirdPage from './components/ThirdPage.vue'
import TheWelcome from './components/TheWelcome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TheWelcome
  },
  {
    path: '/second',
    name: 'SecondPage',
    component: SecondPage
  },
  {
    path: '/third',
    name: 'ThirdPage',
    component: ThirdPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

