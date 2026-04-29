import Gameroom from '@/components/gameroom.vue'
import Abedroom from '@/views/abedroom.vue'
import Basement from '@/views/basement.vue'
import Garage from '@/views/garage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu,
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
    }
  ],
})

export default router
