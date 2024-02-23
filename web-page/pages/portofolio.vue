<script setup lang="ts">
useSeoMeta({
   title: 'Yukie muhammad billal personal website',
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
      <div class="navigation-wrapper">
         <ul class="wrapper">
            <li class="navigation-item">
               <Icon name="bxs:home" />
            </li>
            <li class="navigation-item">
               <Icon name="bxs:user" />
            </li>
         </ul>
      </div>
      <div class="profile-wrapper" v-if="selectedPage == 'Home'">
         <div class="profile-box">
            <p>Hi, I'am</p>
            <p>Yukie Muhammad Billal</p>
            <p>Junior fullstack web development</p>
         </div>
      </div>
      <div class="image-profile-wrapper">
         <img src="/tet-chibi.png" alt="Ini gambar" width="437" />
      </div>
   </div>
</template>