import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '@/views/SearchView.vue'
import Movieview from '@/views/MovieView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search',
      component: SearchView
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movieview
    },
    {
      path: '/404',
      name: 'notfound',
      component: NotFoundView,
    },
    {
      path: "/:catchAll(.*)",
      redirect: '/404'
    }
  ]
})

export default router
