<template>
  <h1 class="mb-30">{{ msg }}</h1>
  <div class="mx-auto w-100 p-10 bg-white text-center border rounded border-primary text-primary font-bold mb-30">DEDE</div>
  <div class="w-full bg-gray-200 m-auto lg:max-w-screen-lg text-40">max-w-md</div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

</script>

<style scoped>

</style>
