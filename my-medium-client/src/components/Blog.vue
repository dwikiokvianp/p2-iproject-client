<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-12">
        <BlogDetail v-for="(data, index) in content" :key="data.id" :data="data"/>
      </div>
    </div>
  </section>
</template>

<script>
import BlogDetail from "@/components/BlogComponent/BlogDetail.vue";

import {mapActions} from "pinia";
import {useContentStore} from "@/stores/contentStore";

export default {
  name: "Blog",
  components: {
    BlogDetail
  },
  data() {
    return {
      content: []
    }
  },
  methods: {
    ...mapActions(useContentStore, ["getData"]),
  },
  async created() {
    this.content = await this.getData()
    console.log(this.content)
  }

}
</script>

<style scoped>

</style>