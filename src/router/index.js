// import VueRouter from 'vue-router'

import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'

import About from '../views/About'
import ComicView from '../views/ComicView';

const routes = [
  {
    path: '/',
    name: 'ComicView',
    component: ComicView,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
// export routes

const router = createRouter({
  history: createWebHistory(),
  routes
})

// const router = new VueRouter({
//   routes // short for `routes: routes`
// })

export default router