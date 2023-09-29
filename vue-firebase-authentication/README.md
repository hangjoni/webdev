## Learnings

- Vite has native .env support, do not install dotenv.
- environment variables in Vite needs to start with VITE\_
- In Firebase, onAuthStateChanged return an unsubscribe method, which stops this from listening. The usage looks peculiar like this:

```
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}
```

This helps the listener from overcrowding and causing memory leakage

- To restrict certain views to logged in users only:
  we add meta tag to the route `meta: { requiresAuth: true }` and then
  define a middleware to get router to check each route and compare with user auth

```
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth) {
    if (await getCurrentUser) {
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
```

Notice here we use our own getCurrentUser instead of getAuth() because
we want to ensure when page reloads, our authentication wouldn't be lost.
By default the getAuth might take some time to run, so by the time the
page reloads, it might not return the user auth yet. Our method
takes care of that

```
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}
```
