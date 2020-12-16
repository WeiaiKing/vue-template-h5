import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 重定向
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
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

router.beforeEach((to, from, next) => {
  /**
   * to 将要访问的路径
   * from 代表从哪个路径跳转而来
   * next 是一个函数，表示放行
   *  next() 放行 next('/login') 强制跳转
   * */
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
