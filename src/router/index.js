import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CreationMatch from '@/components/CreationMatch'
import AdminPage from '@/components/AdminPage'
import GameCreation from '@/components/GameCreation'
import GestionPlayer from '@/components/GestionPlayer'
import GestionPage from '@/components/GestionPage'
import PagePlayer from '@/components/PagePlayer'
import PageStadium from '@/components/PageStadium'
import 'vue-material-design-icons/styles.css'
import MenuIcon from 'vue-material-design-icons/menu.vue'

Vue.component('menu-icon', MenuIcon)

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
    },
    {
      path: '/gamecreation',
      name: 'GameCreation',
      component: GameCreation
    },
    {
      path: '/gestionplayer',
      name: 'GestionPlayer',
      component: GestionPlayer
    },
    {
      path: '/gestionpage',
      name: 'GestionPage',
      component: GestionPage
    },
    {
      path: '/pageplayer',
      name: 'PagePlayer',
      component: PagePlayer
    },
    {
      path: '/pagestadium',
      name: 'PageStadium',
      component: PageStadium
    }
  ]
})
