import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recommend from '../views/home/components/Recommend'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('../views/city/City')
  },
  {
    path: '/',
    name: '切换',
    component: Recommend
  }
]

const router = new VueRouter({
  routes
})

export default router
