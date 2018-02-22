import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CreationMatch from '@/components/CreationMatch'
import AdminPage from '@/components/AdminPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'CreationMatch',
      component: CreationMatch
    },
    {
      path: '/adminpage',
      name: 'AdminPage',
      component: AdminPage
    }
  ]
})
