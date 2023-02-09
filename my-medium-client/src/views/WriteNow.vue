<template>
  <div class="container mx-auto w-2/3">
    <h1 class="mt-10 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white mb-14">
      Write your own thought here</h1>
    <div class="">
      <form action="" @submit.prevent="writeNow">

        <label class="block mb-3 text-sm font-medium text-gray-900 dark:text-white" for="title">Your Title</label>
        <textarea id="title" v-model="title"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your title here..."
                  rows="4"></textarea>

        <label class="block my-3 text-sm font-medium text-gray-900 dark:text-white" for="hotline">Your Hotline</label>
        <textarea id="hotline" v-model="hotline"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your hotline here..."
                  rows="4"></textarea>
        <label class="block my-3 text-sm font-medium text-gray-900 dark:text-white" for="contentFill">Your
          Content</label>
        <textarea id="contentFill" v-model="contentFill"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                  rows="4"></textarea>
        <label class="block my-2 text-sm font-medium text-gray-900 dark:text-white" for="topic">Select Topic</label>
        <select id="topic" v-model="topic"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option disabled value="">Select a topic</option>
          <option v-for="(data, index) in topics" :key="data.id" :value="data.id">{{
              data.name
            }}
          </option>
        </select>
        <label class="block my-2 text-sm font-medium text-gray-900 dark:text-white" for="type">Select Type</label>
        <select id="type" v-model="type"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option disabled selected value="">Select a type</option>
          <option value="private">Private</option>
          <option value="public">Public</option>
        </select>
        <button
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-4"
            type="submit">
          Post Now
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import {useContentStore} from "@/stores/contentStore";
import {mapActions} from "pinia";

export default {
  name: "WriteNow",
  data() {
    return {
      title: '',
      hotline: '',
      contentFill: '',
      topic: '',
      type: '',
      topics: ''
    }
  },
  methods: {
    ...mapActions(useContentStore, ["getTopics", "createContent"]),
    async writeNow() {
      const contentData = {
        title: this.title,
        hotline: this.hotline,
        contentFill: this.contentFill,
        topic: this.topic,
        type: this.type
      }

      await this.createContent(contentData)
      this.$router.push({name: 'Home'})
    }
  },
  async created() {
    this.topics = await this.getTopics()
  }
}
</script>

<style scoped>

</style>