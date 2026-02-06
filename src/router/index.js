import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loaded route components (recommended)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/Account.vue')
  },
  {
    path: '/book',
    name: 'book',
    component: () => import('../views/Book.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/Gallery.vue')
  },
  // Catch-all route (404 page)
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  // Use HTML5 history mode (clean URLs without #)
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Optional: smooth scrolling behavior when clicking links
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router