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
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "RegisterComponent",
  setup() {
    const email = ref("");
    const password = ref("");
    const errMsg = ref("");
    const router = useRouter();

    const signIn = () => {
      signInUser(email.value, password.value);
    };

    const signInWithGoogle = () => {
      // Implement Google sign-in logic here
    };

    return {
      email,
      password,
      signIn,
      signInWithGoogle,
      errMsg,
    };
  },
});
</script>

<style lang="scss" scoped></style>
