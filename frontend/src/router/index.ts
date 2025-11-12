import { createRouter, createWebHistory } from 'vue-router'
import HomeBusTickets from '@/views/HomeBusTickets.vue'
import ListBusTickets from '@/views/ListBusTickets.vue'
import { GET_COMPANIES } from '@/stores/actions'
import { useStore } from '@/stores'

const routes = [
  {
    path: '/',
    name: 'home-tickets',
    component: HomeBusTickets
  },
  {
    path: '/onibus',
    name: 'list-bus-tickets',
    component: ListBusTickets
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
