<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a class="flex items-center">
        <img alt="Didium Logo" class="h-6 mr-3 sm:h-9"
             src="https://www.clipartmax.com/png/middle/446-4464525_clip-art-freeuse-download-modern-latin-d-svg-png-icon-alphabet-o.png"/>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Didium</span>
      </a>
      <div class="flex md:order-2">
        <button aria-controls="navbar-search" aria-expanded="false"
                class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                data-collapse-toggle="navbar-search"
                type="button">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  fill-rule="evenodd"></path>
          </svg>
          <span class="sr-only">Search</span>
        </button>
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    fill-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input id="s-navbar"
                 class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Search..."
                 type="text">
        </div>
        <button aria-controls="navbar-search" aria-expanded="false"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                data-collapse-toggle="navbar-search" type="button">
          <span class="sr-only">Open menu</span>
          <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  fill-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div id="navbar-search" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <div class="relative mt-3 md:hidden">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    fill-rule="evenodd"></path>
            </svg>
          </div>
          <input id="search-navbar"
                 class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Search..."
                 type="text">
        </div>
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a aria-current="page"
               class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:hover:text-black md:p-0 dark:text-white text-gray-700"
               href="#"
               @click.prevent="$router.push('/')">Home</a>
          </li>
          <li v-if="isUserPremium !== 'premium'">
            <a class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
               href="#"
               @click.prevent="$router.push('/pricing') ">Pricing</a>
          </li>
          <li v-if="!isLogin">
            <a class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
               href="#" @click.prevent="$router.push('/login')">Login</a>
          </li>
          <li v-if="!isLogin">
            <a class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
               href="#"
               @click.prevent="$router.push('/register')">Sign Up</a>
          </li>
          <li v-if="isLogin">
            <a class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
               href="#" @click.prevent="signOut">Sign Out</a>
          </li>
          <li v-if="isLogin">
            <a class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
               href="#" @click.prevent="$router.push('/post')">Start Writing</a>
          </li>
          <li v-if="isLogin && isUserPremium === 'premium'">
            <a class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
               href="#" @click.prevent="$router.push('/premium')">Premium Lounge</a>
          </li>
          <li v-if="isLogin ">
            <a class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
               href="#" @click.prevent="$router.push('/userfollow')">User</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>

import {successNotification} from "@/utility/notification";
import {mapActions, mapWritableState} from "pinia";
import {useUserStore} from "@/stores/userStore";

export default {
  name: "Navbar",
  methods: {
    ...mapActions(useUserStore, ["isPremium"]),
    signOut() {
      try {
        localStorage.clear();
        successNotification('You have been signed out successfully');
        this.isUserPremium = false;
        this.isLogin = false;
      } catch (err) {
        errorNotification(err.message)
      }
    }
  },
  computed: {
    ...mapWritableState(useUserStore, ['isLogin', "isUserPremium"])
  },
  watch: {
    isLogin() {
      this.isPremium()
    }
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.isLogin = true;
    }
    this.isPremium()
  }

}

</script>

<style scoped>

</style>