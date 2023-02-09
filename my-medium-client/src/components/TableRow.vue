<template>
  <tr
      class="bg-white dark:bg-gray-800">
    <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" scope="row">
      {{ myIndex }}
    </th>
    <td class="px-6 py-4">
      {{ name }}
    </td>
    <td class="px-6 py-4">
      {{ email }}
    </td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: ["data", "index"],
  computed: {
    name() {
      return this.data.User.name
    },
    email() {
      return this.data.User.email
    },
    myIndex() {
      return this.index + 1
    }
  },
  created() {
    console.log(this.data, "ini data", this.index, "ini index")
  }
}
</script>

<style scoped>

</style>