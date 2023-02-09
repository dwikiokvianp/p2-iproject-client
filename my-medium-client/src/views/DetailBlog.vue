<template>
  <div class="container w-2/3 mx-auto mt-10">
    <a class="inline-flex items-center">
      <img alt="blog" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
           src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg">
      <span class="flex-grow flex flex-col pl-4">
            <span class="text-center title-font font-medium text-gray-900 text-sm">{{ content.User.name }}</span>
                    <span class="text-center text-gray-400 text-xs tracking-widest mt-0.5">{{
                        content.User.job
                      }}</span>
        <button v-if="isLogin"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-4 py-1 mr-2 mt-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                type="button"
                @click="follow(content.UserId)">Follow</button>
          </span>
    </a>
    <div class="flex items-end w-screen">
      <button v-if="isLogin && isUserPremium === 'premium'"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              type="button" @click="summarizeIt(content.id)">
        Summarize It
      </button>
    </div>

    <h1 class="mt-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      {{ content.title }}</h1>
    <p class="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
      {{ content.hotline }}
    </p>
    <p class="font-light text-gray-500 dark:text-gray-400 text-justify">{{ content.contentFill }}</p>
  </div>
</template>

<script>
import {useContentStore} from "@/stores/contentStore";
import {mapActions, mapWritableState} from "pinia";
import {useUserStore} from "@/stores/userStore";

export default {
  name: "DetailBlog",
  data() {
    return {
      content: []
    }
  },
  computed: {
    ...mapWritableState(useUserStore, ["isLogin", "isUserPremium"]),
  },
  methods: {
    ...mapActions(useContentStore, ["getDataById", "summarizeContent"]),
    ...mapActions(useUserStore, ["followUser"]),
    follow(id) {
      this.followUser(id)
    },
    async summarizeIt(id) {
      const summarizedIt = await this.summarizeContent(id)
      this.content.contentFill = summarizedIt.summary
    }
  },
  async created() {
    this.content = await this.getDataById(this.$route.params.id)
    console.log(this.content)
    console.log(this.isUserPremium)
  }
}
</script>

<style scoped>

</style>