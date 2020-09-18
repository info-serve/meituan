import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '@/layout/default.vue'
import pageBlank from '@/layout/blank.vue'
import Index from '@/views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    redirect:'/index',
    children:[
      {
        path:'/index',
        name:'index',
        component:Index
      },
      {
        name:'changeCity',
        path:'/changeCity',
        component:()=>import('../views/ChangeCity.vue')
      },
      {
        name:'goodList',
        path:'goods/:name',//动态路由
        component:()=>import('../views/goods.vue')
      }
    ]
  },
  {
    path: '/pageBlank',
    name: 'pageBlank',
    component: pageBlank,
    children:[
      {
        name:'login',
        path:'/login',
        component:()=>import('../components/login/Login.vue')
      },
      {
        name:'register',
        path:'/register',
        component:()=>import('../components/register/Register.vue')
      }
    
    ]

  },{
    name:"personalInfo",
    path:'/personalInfo',
    component:()=>import('../views/personalInfo.vue')
  },{
    name:'productDetail',
    path:'/productDetail',
    component:()=>import('../components/products/productDetail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


