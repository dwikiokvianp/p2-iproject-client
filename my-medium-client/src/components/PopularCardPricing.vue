<template>
  <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
    <div class="h-full p-6 rounded-lg border-2 border-black flex flex-col relative overflow-hidden">
      <span
          class="bg-black text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
      <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
      <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
        <span>$38</span>
        <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
      </h1>
      <p class="flex items-center text-gray-600 mb-2">
            <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                   stroke-width="2.5" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
      </p>
      <p class="flex items-center text-gray-600 mb-2">
            <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                   stroke-width="2.5" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tumeric plaid portland
      </p>
      <p class="flex items-center text-gray-600 mb-2">
            <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                   stroke-width="2.5" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Hexagon neutra unicorn
      </p>
      <p class="flex items-center text-gray-600 mb-6">
            <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                   stroke-width="2.5" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mixtape chillwave tumeric
      </p>
      <button class="flex items-center mt-auto text-white bg-black border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
              @click="userPayment">
        Button
        <svg class="w-4 h-4 ml-auto" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
             stroke-width="2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
  </div>
</template>

<script>
import {useUserStore} from "@/stores/userStore";
import {mapActions} from "pinia";

export default {
  name: "PopularCardPricing",
  methods: {
    ...mapActions(useUserStore, ["userPayment"]),
  }
}
</script>

<style scoped>

</style>