import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Worker from '@/components/Worker'
import Admin from '@/components/Admin'
import ReclameOrder from '@/components/layouts/ReclameOrder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/worker/:userId/:city/:name',
      name: 'Worker',
      component: Worker
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/reclameOrder',
      name: 'ReclameOrder',
      component: ReclameOrder
    }
  ]
})
