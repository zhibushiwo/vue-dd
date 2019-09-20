import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export const menuRoutes = [
  
  {
    path: '/message',
    name: 'message',
    component: () => import('./views/message/index.vue'),
    meta:{
      title:"消息",
      icon:"icon-icon_message_fill"
    }
  },
  {
    path: '/ding',
    name: 'ding',
    component: () => import('./views/ding/index.vue'),
    meta: {
      title: "Ding",
      icon: "icon-icon_dingtab"
    }
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('./views/work/index.vue'),
    meta: {
      title: "工作",
      icon: "icon-icon_work_fill"
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('./views/contact/index.vue'),
    children:[
      {
        path:"friends",
        component: () => import('./views/contact/friends.vue'),
      },
      {
        path:"newfriends",
        component: () => import('./views/contact/newfriends.vue'),
      },
      {
        path:"groups",
        component: () => import('./views/contact/groups.vue'),
      },
      {
        path:"speical",
        component: () => import('./views/contact/speical.vue'),
      }
    ],
    meta: {
      title: "通讯录",
      icon: "icon-icon_addresslist_fil"
    }
  }

]

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/message'
    },
    ...menuRoutes
  ]
})
