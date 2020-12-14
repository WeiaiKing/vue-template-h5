import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('@/views/tabbar/Index.vue')
      },
      {
        path: '/card',
        component: () => import('@/views/tabbar/Card.vue')
      },
      {
        path: '/selling',
        component: () => import('@/views/tabbar/Selling.vue')
      },
      {
        path: '/mine',
        component: () => import('@/views/tabbar/Mine.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
