import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/message'
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('./views/message/index.vue')
    },
    {
      path: '/ding',
      name: 'ding',
      component: () => import('./views/ding/index.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('./views/work/index.vue')
    },
    {
      path: '/contack',
      name: 'contack',
      component: () => import('./views/contack/index.vue')
    }
  ]
})
