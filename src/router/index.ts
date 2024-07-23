import { createRouter, createWebHistory } from 'vue-router/auto'
import { isAuthenticated } from '@/middleware/authenticated'
import { isNotAuthenticated } from '@/middleware/notAuthenticated'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "Home" */ '@/pages/home/Index.vue'),
      name: 'Home',
      beforeEnter: isAuthenticated,
    },
    {
      path: '/auth/login',
      component: () => import(/* webpackChunkName: "Login" */ '@/pages/auth/Login.vue'),
      beforeEnter: isNotAuthenticated,
      name: 'Login',
    },
    {
      path: '/auth/register',
      component: () => import(/* webpackChunkName: "Login" */ '@/pages/auth/Register.vue'),
      beforeEnter: isNotAuthenticated,
      name: 'Register',
    }
  ],
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
