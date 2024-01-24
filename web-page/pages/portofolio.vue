<script setup lang="ts">
useSeoMeta({
   title: 'My Amazing poersonal website',
   ogTitle: 'Yukie muhammad billal personal website',
   description: 'My personal website, documentations, project, story, blog. all in one',
   ogDescription: 'Yukie personal web, feel free to explore. Learn something by doing, My story life in 1 place.',
   ogImage: 'https://yukie.site/yukie.jpg',
   ogImageAlt: 'Yukie muhammad billal',
   twitterCard: 'summary_large_image'
})

import 'assets/css/main.css'
import 'assets/css/keyframes.css'
import 'assets/css/portofolio/portofolio.css'
import 'assets/css/portofolio/portofolio-1024.css'
import 'assets/css/portofolio/portofolio-1280.css'
import Home from "~/components/portofolio/Home.vue"

const selectedPage: string= "Home"
</script>

<template>
   <div class="content-wrapper">
      <Home v-if="selectedPage == 'Home'" />
   </div>
</template>