<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white" href="#">
        <img alt="didium logo" class="w-8 h-8 mr-2"
             src="https://www.clipartmax.com/png/middle/446-4464525_clip-art-freeuse-download-modern-latin-d-svg-png-icon-alphabet-o.png">
        Didium

      </a>
      <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form action="#" class="space-y-4 md:space-y-6" @submit.prevent="loginUser">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="email">Your email</label>
              <input id="email"
                     v-model="email"
                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     name="email"
                     placeholder="name@company.com"
                     required="" type="email">
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     for="password">Password</label>
              <input id="password"
                     v-model="password"
                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     name="password"
                     placeholder="••••••••"
                     required=""
                     type="password">
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember"
                         class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                         required=""
                         type="checkbox">
                </div>
                <div class="ml-3 text-sm">
                  <label class="text-gray-500 dark:text-gray-300" for="remember">Remember me</label>
                </div>
              </div>
              <a class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Forgot
                password?</a>
            </div>
            <button
                class="w-full text-white bg-gray-400 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="submit">
              Sign in
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <a class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            href="#">Sign
              up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {useUserStore} from "@/stores/userStore";
import {mapActions, mapWritableState} from "pinia";

import {successNotification, errorNotification} from "@/utility/notification";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapWritableState(useUserStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useUserStore, ["login"]),
    async loginUser() {
      try {
        const userData = {
          email: this.email,
          password: this.password,
        }
        const access_token = await this.login(userData);
        this.$router.push("/")
        this.isLogin = true
        localStorage.setItem("access_token", access_token)
        successNotification("Login successful")
      } catch (err) {
        errorNotification(err.response.data.message)
      }
    },
  }
}
</script>

<style scoped>

</style>