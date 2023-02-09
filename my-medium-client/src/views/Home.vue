<template>
  <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          <br class="hidden lg:inline-block">The Best Reading Experience You've Ever Had
        </h1>
        <p class="mb-8 leading-relaxed">We try to bring recreate your reading experience by like interacting with the
          real writer</p>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img alt="hero" class="object-cover object-center rounded"
             src="https://www.clipartmax.com/png/middle/446-4464525_clip-art-freeuse-download-modern-latin-d-svg-png-icon-alphabet-o.png">
      </div>
    </div>
    <Blog/>
  </section>
</template>

<script>
import Blog from "@/components/Blog.vue";

export default {
  name: "Home",
  components: {
    Blog
  }
}
</script>

<style scoped>

</style>