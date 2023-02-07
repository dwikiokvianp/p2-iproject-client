<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-10">
        <h1 class="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever you choose, remember Didium is
          always here</p>
      </div>
      <div class="flex flex-wrap -m-4 justify-center">
        <CardPricing/>
        <PopularCardPricing/>
      </div>
    </div>
  </section>
</template>

<script>
import CardPricing from "@/components/CardPricing.vue";
import PopularCardPricing from "@/components/PopularCardPricing.vue";

export default {
  name: "Pricing",
  components: {
    PopularCardPricing,
    CardPricing
  }
}
</script>

<style scoped>

</style>