<template>
  <div class="p-12 md:w-1/2 flex flex-col items-start">
    <span
        class="inline-block py-1 px-2 rounded bg-gray-400 text-white text-xs font-medium tracking-widest">{{
        data.Topic.name
      }}</span>
    <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{{ data.title }}</h2>
    <p class="leading-relaxed mb-8">{{ data.hotline }}</p>
    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
      <a class="text-black inline-flex items-center" @click.prevent="$router.push('/blog/'+ data.id)">Read More
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
             stroke-width="2" viewBox="0 0 24 24">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
    <a class="inline-flex items-center">
      <img alt="blog" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
           src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg">
      <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900">{{ data.User.name }}</span>
            <span class="text-gray-400 text-xs tracking-widest mt-0.5">{{ data.User.job }}</span>
          </span>
    </a>
  </div>
</template>

<script>
import {mapState} from "pinia";
import {useUserStore} from "@/stores/userStore";

export default {
  name: "BlogDetail",
  props: ["data"],
  computed: {
    ...mapState(useUserStore, ["isLogin"])
  }
}
</script>

<style scoped>

</style>