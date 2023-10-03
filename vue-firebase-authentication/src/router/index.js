import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeedView from '../views/FeedView.vue'
import SigninView from '../views/SigninView.vue'
import RegisterView from '../views/RegisterView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedView,
      meta: { requiresAuth: true }
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        // calling the onAuthStateChanged instance again will unsubscribe
        // this is used because we only need to check user status once
        console.log('auth state changed, user is logged in')
        removeListener()
        resolve(user)
      },
      reject
      // this part is never reached as error ? parameter in onAuthStateChanged is deprecated
      // if the user is logged out, the user above would be null
    )
  })
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth) {
    const user = await getCurrentUser()
    if (user) {
      console.log('is logged in')
      next()
    } else {
      console.log('NOT logged in')
      next('/signin')
    }
  } else {
    next()
  }
})
export default router
