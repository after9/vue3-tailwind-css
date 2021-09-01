<template>
  <h1 class="text-22 font-bold mb-30">{{ msg }}</h1>
  <div class="wrap md:container md:mx-auto px-20">
    <div class="nav py-10 px-20 bg-primary rounded-8 mb-20">
      <div class="flex flex-row flex-wrap gap-20 items-center">
        <div class="flex-auto">
          <ul class="flex flex-row items-center">
            <li class="flex-grow-0 flex-shrink-0"><a href="" class="text-white text-16 py-8 px-14 hover:underline" title="Home">Home</a></li>
            <li class="flex-grow-0 flex-shrink-0 text-white text-16 py-8 px-14 hover:underline"><a href="" class="text-white text-16 py-8 px-14 hover:underline" title="Doc">Doc</a></li>
            <li class="flex-grow-0 flex-shrink-0 text-white text-16 py-8 px-14 hover:underline"><a href="" class="text-white text-16 py-8 px-14 hover:underline" title="Example">Example</a></li>
          </ul>
        </div>
        <div class="flex-grow-0 flex-shrink-0 text-right">
          <a href class="font-bold py-6 px-20 rounded border border-white text-white bg-white bg-opacity-0 hover:bg-opacity-20">Download</a>
        </div>
      </div>
    </div>
    <div class="mainWrap grid grid-row grid-cols-12 gap-20 mb-20">
      <div class="col-span-12 md:col-span-8 md:h-full bg-gray-200 rounded-8"></div>
      <div class="col-span-12 md:col-span-4 md:h-full bg-gray-200 rounded-8"></div>
    </div>
    <div class="footer bg-gray-200 h-80 mb-20 rounded-8"></div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

</script>

<style scoped>
/* .nav_link{
  @apply text-gray-900 text-16 py-8 px-14;
} */
.mainWrap{
  height:500px;
}
</style>
