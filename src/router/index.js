import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 重写路由push方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/login/index',
    name: 'login',
    component: () => import(/* webpackChunkName: "home" */ '../views/login/index.vue')
  },
  {
    path: '/',
    redirect: '/discover/index'
  },
  {
    path: '/discover/index',
    name: 'discoverIndex',
    component: () => import(/* webpackChunkName: "home" */ '../views/discover/index.vue')
  },
  {
    path: '/recommend/index',
    name: 'recommendIndex',
    component: () => import(/* webpackChunkName: "home" */ '../views/recommend/index.vue')
  },
  {
    path: '/mine/index',
    name: 'mineIndex',
    component: () => import(/* webpackChunkName: "home" */ '../views/mine/index.vue')
  },
  {
    path: '/sing/index',
    name: 'singIndex',
    component: () => import(/* webpackChunkName: "home" */ '../views/sing/index.vue')
  },
  {
    path: '/community/index',
    name: 'communityIndex',
    component: () => import(/* webpackChunkName: "home" */ '../views/community/index.vue')
  },
  
]

const router = new VueRouter({
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // ...
  next()
})

// 全局后置钩子
// router.afterEach((to, from) => {
//   // ...
// })

export default router
