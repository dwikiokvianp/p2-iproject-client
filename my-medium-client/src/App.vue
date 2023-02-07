<script>
import {RouterView} from "vue-router";

import Navbar from "@/components/Navbar.vue";
import Home from "@/views/Home.vue";
import Pricing from "@/views/Pricing.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    Pricing

  }
};
</script>

<template>
  <Navbar/>
  <RouterView/>
</template>

<style scoped>
</style>
