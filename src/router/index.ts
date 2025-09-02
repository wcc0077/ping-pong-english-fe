import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


const routes = [
  // Define your routes here
  {
    path:'/',
    name:'Home',
    component: () => import('@/views/MainCard/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
