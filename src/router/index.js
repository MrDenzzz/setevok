import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Worker from '@/components/Worker'
import Admin from '@/components/Admin'
import ReclameReport from '@/components/layouts/ReclameReport'
import CinemaReport from '@/components/layouts/CinemaReport'
import Order from '@/components/layouts/Order'
import Table from '@/components/layouts/Table'
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
      path: '/worker/:userId',
      name: 'Worker',
      component: Worker
    },
    {
      path: '/order/:userId',
      name: 'Order',
      component: Order
    },
    {
      path: '/admin/:userId',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/table/:id',
      name: 'Table',
      component: Table
    },
    {
      path: '/reclamereport/:id',
      name: 'ReclameReport',
      component: ReclameReport
    },
    {
      path: '/cinemareport/:id',
      name: 'cinemaReport',
      component: CinemaReport
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    }
  ]
})
