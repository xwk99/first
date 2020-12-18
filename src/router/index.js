import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recommend from '../views/home/components/Recommend'
import Detail from '../views/detail/Detail'

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
  },
  {
    path: '/detail/:id', // 动态绑定
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
