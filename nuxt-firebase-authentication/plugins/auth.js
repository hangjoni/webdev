export default defineNuxtPlugin(() => {
  // addRouteMiddleware(
  //   "global-test",
  //   () => {
  //     console.log(
  //       "this global middleware was added in a plugin and will be run on every route change"
  //     );
  //   },
  //   { global: true }
  // );

  addRouteMiddleware("auth", () => {
    const { $auth } = useNuxtApp();
    console.log("auth middle ware");
    console.log($auth?.currentUser);

    if (!$auth?.currentUser?.uid) {
      console.log("abort");
      return navigateTo("/signIn");
    }
  });
});
