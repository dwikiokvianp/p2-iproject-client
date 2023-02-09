<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="-my-8 divide-y-2 divide-gray-100">
        <PremiumNews v-for="data in articles" :key="data.id" :data="data"/>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions} from "pinia";
import {useUserStore} from "@/stores/userStore";
import PremiumNews from "@/components/PremiumNews.vue";

export default {
  name: "PremiumLounge",
  components: {PremiumNews},
  data() {
    return {
      data: ""
    }
  },
  computed: {
    articles() {
      return this.data.articles
    }
  },
  methods: {
    ...mapActions(useUserStore, ["premiumUserGetData"]),
  },
  async created() {
    this.data = await this.premiumUserGetData();
    console.log(this.data, "ini data")
  }
}
</script>

<style scoped>

</style>