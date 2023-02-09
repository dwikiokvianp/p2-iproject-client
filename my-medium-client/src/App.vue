<script>
import {RouterView} from "vue-router";

import Navbar from "@/components/Navbar.vue";
import Home from "@/views/Home.vue";
import Pricing from "@/views/Pricing.vue";

import {useUserStore} from "@/stores/userStore";
import {mapActions} from "pinia";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    Pricing

  },
  methods: {
    ...mapActions(useUserStore, ["isPremium"]),
  },
  created() {
  }
};
</script>

<template>
  <Navbar/>
  <RouterView/>
</template>

<style scoped>
</style>
