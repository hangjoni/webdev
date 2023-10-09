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

## How authentication works using Firebase Auth

- First, in main.js, we initialize Firebase , passing in apiKey . This lets us connect to the table on Firebase where our login details are stored

```
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
}

// Initialize Firebase
initializeApp(firebaseConfig)
```

- Within our components, we can import methods provided by firebase/auth
  getAuth, signInWithEmailAndPassword

```
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const signIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Successfully signed in')
      router.push('/feed')
    })
    .catch((error) => {
      errMsg.value = error.message
      console.log('error in signin: ', error.message)
      console.log(errMsg.value !== '')
    })
}
```

- To put guard rail around pages that require users to log in, add an attribute to its route in router definition `meta: { requiresAuth: true }`
  then use a middleware to enforce the logic:

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
export default router
```

To safely check if user is logged in and handling edge cases of page refresh, etc. do not use user = auth().getCurrentUser. Instead, use the provided listener to listen for auth state changed

```
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        // calling the onAuthStateChanged instance again will unsubscribe
        // this is used because we only need to check user status once
        removeListener()
        resolve(user)
      },
      reject
      // this part is never reached as error ? parameter in onAuthStateChanged is deprecated
      // if the user is logged out, the user above would be null
    )
  })
}
```
