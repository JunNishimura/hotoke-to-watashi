import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Idea1 from '@/views/Idea1.vue'
import Idea2 from '@/views/Idea2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/idea1',
    name: 'Idea1',
    component: Idea1
  },
  {
    path: '/idea2',
    name: 'Idea2',
    component: Idea2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
