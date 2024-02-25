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
// import 'assets/css/portofolio/portofolio-1024.css'
// import 'assets/css/portofolio/portofolio-1280.css'


const whosMe = ref<string>('')
const whosMeIndex = ref<number>(0)
const isRemoveWhosMe = ref<boolean>(false)
const whosMeList: string[] = [
    "Junior web developer",
    "Junior api developer",
    "Backend developer",
    "Frontend developer",
    "Fullstack developer",
]

const setWhosMe = () => {
   const selectedWhosMe: string = whosMeList[whosMeIndex.value]
   let selectedWhosMeIndex: number = 0

   if (whosMeList.includes(whosMe.value)) isRemoveWhosMe.value = true

   if (isRemoveWhosMe.value) {
      removeStringWhosMe()
   } else {
      setStringWhosMe(selectedWhosMe, selectedWhosMeIndex)
   }
}

const removeStringWhosMe = () => {
   const interval = setInterval(() => {
      whosMe.value = whosMe.value.slice(0, -1)
      if (whosMe.value === '') {
         isRemoveWhosMe.value = false
         clearInterval(interval)
      }
      if (!isRemoveWhosMe.value) setWhosMe()
   }, 50)
}

const setStringWhosMe = (selectedWhosMe: string, selectedWhosMeIndex: number) => {
   const interval = setInterval(() => {
      whosMe.value = whosMe.value + selectedWhosMe[selectedWhosMeIndex]
      selectedWhosMeIndex++
      if (selectedWhosMeIndex >= selectedWhosMe.length) {
         clearInterval(interval)
         setTimeout(() => {
            whosMeIndex.value++
            if (whosMeIndex.value >= whosMeList.length) whosMeIndex.value = 0
            setWhosMe()
         }, 3000)
      }
   }, 100)
}

setWhosMe()
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
      <div class="profile-wrapper">
         <div class="profile-box">
            <p>Hi, I'am</p>
            <p>Yukie Muhammad Billal</p>
            <p><span class="text-change">{{ whosMe }}</span><span class="animate-blink">|</span></p>
         </div>
      </div>
      <div class="image-profile-wrapper">
         <img src="/tet-chibi.png" alt="Ini gambar" />
      </div>
   </div>
</template>