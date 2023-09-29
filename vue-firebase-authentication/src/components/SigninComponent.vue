<template>
  <div>
    <h1>Sign in to your account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signIn">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign in with Google</button></p>
    <p v-if="errMsg.value !== ''">{{ errMsg }}</p>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'RegisterComponent',
  setup() {
    const email = ref('')
    const password = ref('')
    const errMsg = ref('')
    const router = useRouter()

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

    const signInWithGoogle = () => {
      // Implement Google sign-in logic here
    }

    return {
      email,
      password,
      signIn,
      signInWithGoogle,
      errMsg
    }
  }
})
</script>

<style lang="scss" scoped></style>
