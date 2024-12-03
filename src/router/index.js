import { createRouter, createWebHistory } from 'vue-router'
import FranceView from '../views/FranceView.vue'
import GermanyView from '../views/GermanyView.vue'
import EnglandView from '../views/EnglandView.vue'

const routes = [
  {
    path: '/',
    name: 'france',
    component: FranceView
  },
  {
    path: '/germany',
    name: 'germany',
    component: GermanyView
  },
  {
    path: '/england',
    name: 'england',
    component: EnglandView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
