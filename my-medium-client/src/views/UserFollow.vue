<template>
  <div class="container mx-auto">
    <h1 class="text-center mt-10 mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      Following List</h1>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th class="px-6 py-3" scope="col">
            No
          </th>
          <th class="px-6 py-3" scope="col">
            Name
          </th>
          <th class="px-6 py-3" scope="col">
            Email
          </th>
        </tr>
        </thead>
        <tbody>
        <TableRow v-for="(data, index) in followingList" :key="data.id" :data="data" :index="index"/>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TableRow from "@/components/TableRow.vue";

import {mapActions} from "pinia";
import {useUserStore} from "@/stores/userStore";

export default {
  name: "UserFollow",
  components: {
    TableRow
  },
  methods: {
    ...mapActions(useUserStore, ["getFollowingUser"])
  },
  data() {
    return {
      followingList: []
    }
  },
  async created() {
    this.followingList = await this.getFollowingUser()
  }
}
</script>

<style scoped>

</style>