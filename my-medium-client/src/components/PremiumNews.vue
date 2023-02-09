<template>
  <div class="py-8 flex flex-wrap md:flex-nowrap">
    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
      <span class="font-semibold title-font text-gray-700">{{ source }}</span>
      <span class="mt-1 text-gray-500 text-sm">{{ date }}</span>
    </div>
    <div class="md:flex-grow">
      <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{{ data.title }}</h2>
      <p class="leading-relaxed">{{ data.description }}</p>
      <a :href="data.url" class="text-indigo-500 inline-flex items-center mt-4">Learn More
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
             stroke-width="2" viewBox="0 0 24 24">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PremiumNews",
  props: ["data"],
  computed: {
    date() {
      return new Date(this.data.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    source() {
      return this.data.source.name;
    }
  }
}
</script>

<style scoped>

</style>