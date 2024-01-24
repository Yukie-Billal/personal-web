<script setup lang="ts">
import 'assets/css/main.css'
import 'assets/css/keyframes.css'
import 'assets/css/portofolio/portofolio.css'
import 'assets/css/portofolio/portofolio-1024.css'
import Home from "~/components/portofolio/Home.vue"

const selectedPage: string= "Home"
</script>

<template>
   <div class="content-wrapper">
      <Home v-if="selectedPage == 'Home'" />
   </div>
</template>