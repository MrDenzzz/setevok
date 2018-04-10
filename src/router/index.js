import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Worker from '@/components/Worker'
import Admin from '@/components/Admin'
import ReclameOrder from '@/components/layouts/ReclameOrder'
import Registration from '@/components/Registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/worker',
      name: 'Worker',
      component: Worker
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/reclameOrder/:id',
      name: 'ReclameOrder',
      component: ReclameOrder
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    }
  ]
})
