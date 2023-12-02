<script setup lang="ts">
import '@/assets/portofolio.css'
import Home from "~/components/portofolio/Home.vue";

const selectedPage: string= "Home"
</script>

<template>
   <div class="content-wrapper">
      <Home v-if="selectedPage == 'Home'" />
   </div>
</template>