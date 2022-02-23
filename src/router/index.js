import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Gallery from '../views/Gallery.vue'
import CustomFraming from '../views/CustomFraming.vue'
import DigitalPrinting from '../views/DigitalPrinting.vue'
import WholesaleOrders from '../views/WholesaleOrders.vue'
import Installation from '../views/Installation.vue'
import ArtRestoration from '../views/ArtRestoration.vue'
import PhotoRestoration from '../views/PhotoRestoration.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/custom_framing',
    name: 'CustomFraming',
    component: CustomFraming
  },
  {
    path: '/digital_printing',
    name: 'DigitalPrinting',
    component: DigitalPrinting
  },
  {
    path: '/wholesale_orders',
    name: 'WholesaleOrders',
    component: WholesaleOrders
  },
  {
    path: '/installation',
    name: 'Installation',
    component: Installation
  },
  {
    path: '/art_restoration',
    name: 'ArtRestoration',
    component: ArtRestoration
  },
  {
    path: '/photo_restoration',
    name: 'PhotoRestoration',
    component: PhotoRestoration
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
