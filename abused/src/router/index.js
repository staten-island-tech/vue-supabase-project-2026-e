
import Abedroom from '@/views/abedroom.vue'
import Basement from '@/views/basement.vue'
import Garage from '@/views/garage.vue'
import Intro from '@/views/intro.vue'
import Menu from '@/views/menu.vue'
import Redirect from '@/views/redirect.vue'
import Finished from '@/views/finished.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/bedroom',
      name: 'bedroom',
      component: Abedroom
    },
    {
      path: '/basement',
      name: 'basement',
      component: Basement
    },
    {
      path: '/garage',
      name: 'garage',
      component: Garage
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/redirect',
      name: 'redirect',
      component: Redirect
    },
    {
      path: '/finished',
      name: 'finished',
      component: Finished
    }
  ],
})

export default router
