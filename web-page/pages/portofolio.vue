<script setup lang="ts">
useSeoMeta({
   title: 'Yukie muhammad billal personal website',
   ogTitle: 'Yukie muhammad billal personal website',
   description: 'My personal website, documentations, project, story, blog. all in one',
   ogDescription: 'Yukie personal web, feel free to explore. Learn something by doing, My story life in 1 place.',
   ogImage: 'https://yukie.site/tet-chibi.png',
   ogImageAlt: 'Yukie muhammad billal',
   twitterCard: 'summary_large_image'
})

import 'assets/css/main.css'
import 'assets/css/portofolio/portofolio.css'

interface linkInterface {
   name: string,
   link: string,
   iconName: string,
}

const socials = ref<linkInterface[]>([
   {
      name: 'github',
      link: 'https://github.com/Yukie-Billal',
      iconName: 'ion:logo-github',
   },
   {
      name: 'Instagram',
      link: 'https://www.instagram.com/yukie_m_billal/',
      iconName: 'ion:logo-instagram',
   },
   {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/yukie-muhammad-billal-b3bb59271/',
      iconName: 'ion:logo-linkedin',
   }
])

// text changer
const whoMe = ref<string>('')
const whoMeIndex = ref<number>(0)
const isRemoveWhoMe = ref<boolean>(false)
const whoMeList: string[] = [
    "Junior web developer",
    "Junior api developer",
    "Backend developer",
    "Frontend developer",
    "Fullstack developer",
]

const setWhoMe = () => {
   const selectedWhoMe: string = whoMeList[whoMeIndex.value]
   let selectedWhoMeIndex: number = 0

   if (whoMeList.includes(whoMe.value)) isRemoveWhoMe.value = true

   if (isRemoveWhoMe.value) {
      removeStringWhoMe()
   } else {
      setStringWhoMe(selectedWhoMe, selectedWhoMeIndex)
   }
}

const removeStringWhoMe = () => {
   const interval = setInterval(() => {
      whoMe.value = whoMe.value.slice(0, -1)
      if (whoMe.value === '') {
         isRemoveWhoMe.value = false
         clearInterval(interval)
      }
      if (!isRemoveWhoMe.value) setWhoMe()
   }, 50)
}

const setStringWhoMe = (selectedWhoMe: string, selectedWhoMeIndex: number) => {
   const interval = setInterval(() => {
      whoMe.value = whoMe.value + selectedWhoMe[selectedWhoMeIndex]
      selectedWhoMeIndex++
      if (selectedWhoMeIndex >= selectedWhoMe.length) {
         clearInterval(interval)
         setTimeout(() => {
            whoMeIndex.value++
            if (whoMeIndex.value >= whoMeList.length) whoMeIndex.value = 0
            setWhoMe()
         }, 3000)
      }
   }, 60)
}
// end text changer

// event handler
const wheelHandle = (e: WheelEvent) => {
   console.log(e.deltaY, e)
}

setWhoMe()
</script>

<template>
   <div class="navigation-container">
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
   </div>
   <div class="content-wrapper" @wheel="wheelHandle" >
      <div class="id-section" id="home-page">
         <div class="profile-wrapper">
            <div class="profile-box">
               <p>Hi, I'am</p>
               <p>Yukie Muhammad Billal</p>
               <p><span class="text-change">{{ whoMe }}</span><span class="animate-blink">|</span></p>
               <div class="social-media-wrapper" v-for="social in socials">
                  <a :href="social.link" target="_blank" :data-title="social.name"><Icon :name="social.iconName" class="social-icon" /></a>
               </div>
            </div>
         </div>
         <div class="image-profile-wrapper">
            <img src="/tet-chibi.png" alt="Ini gambar" />
         </div>
      </div>
      <div class="id-section">
         KASIUN
      </div>
   </div>
</template>