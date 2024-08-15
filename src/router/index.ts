import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory
} from 'vue-router'

const BestDeals = () => import('@pages/BestDeals.vue')

const router = _createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes: [
    { 
      path: "/", 
      name: 'Best Deals', 
      component: BestDeals 
    },
  ],
  scrollBehavior(_to, _from, _savedPosition) {
    return { top: 0 }
  },
})

export default router