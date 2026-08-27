<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
   <header>
      <div class="bg-background">
         <nav class="bg-primary">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
         </nav>
      </div>
   </header>

   <RouterView />
</template>

<style scoped></style>
