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
   "Junior API developer",
   "Backend developer",
   "Frontend developer",
   "Fullstack developer",
]
const skillIcons: string[] = [
   "css", "html", "sass", "tailwindcss", "bootstrap",
   "javascript", "typescript", "php", "python", 
   "vue", "react", "nuxt", "nodejs", "bun", "express", "laravel", "flask", 
   "mysql", "mongodb", "redis",
   "vscode", "postman", "git", "github", "githubactions", "figma", "bash", "docker",
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



const borderRadiusMeStyle = ref<string>('10px 10px 10px 10px')
const randomizeBorderRadiusStyle = (): void => {
   const random = (count: number = 50) => Math.floor(Math.random() * (count - 20 + 1)) + 30
   borderRadiusMeStyle.value = `${random()}% ${random()}% ${random()}% ${random()}%`
}

const router = useRouter()
const handleMenuClick = () => {
   router.push('#about-page')
}

onNuxtReady(() => {
   setWhoMe()
   randomizeBorderRadiusStyle()
   setInterval(() => { randomizeBorderRadiusStyle() }, 1000)
})
</script>

<template>
   <div class="navigation-container">
      <div class="navigation-wrapper">
         <ul class="wrapper">
            <li class="navigation-item">
               <Icon name="bxs:home" />
            </li>
            <li class="navigation-item" @click="handleMenuClick">
               <Icon name="bxs:user" />
            </li>
         </ul>
      </div>
   </div>
   <div class="content-wrapper">
      <div class="id-section" id="home-page">
         <div class="profile-wrapper">
            <div class="profile-box">
               <p>Hi, I'am</p>
               <p>Yukie Muhammad Billal</p>
               <p><span class="text-change">{{ whoMe }}</span><span class="animate-blink">|</span></p>
               <div class="social-media-wrapper" v-for="social in socials">
                  <a :href="social.link" target="_blank" :data-title="social.name">
                     <Icon :name="social.iconName" class="social-icon" />
                  </a>
               </div>
            </div>
         </div>
         <div class="image-profile-wrapper">
            <img src="/tet-chibi.png" alt="Ini gambar" />
         </div>
      </div>
      <div class="id-section" id="about-page">
         <div class="wrapper">
            <div class="me-image-wrapper" :style="{ borderRadius: borderRadiusMeStyle }">
               <img src="/tet-chibi.png" alt="">
            </div>
            <div class="about-wrapper text-white">
               <h3>Yukie muhammad billal</h3>
               <h5>Web Developer | Backend Developer</h5>
               <p>Saya seorang developer dengan 1 tahun pengalaman dalam software development, terbiasa dalam melakukan
                  troubleshoot dalam permasalahan di dalam project, saya sudah terbiasa menggunakan berbagai bahasa
                  pemrograman dan tools untuk membuat sebuah aplikasi berbasis website, REST API ataupun desktop.</p>
               <ul class="detailed">
                  <li>
                     <Icon name='ion:ios-arrow-right' /> Email : <span>yukiembillal01@gmail.com</span>
                  </li>
                  <li>
                     <Icon name='ion:ios-arrow-right' /> Nomer telepon : <span>+62 81214454694</span>
                  </li>
                  <li>
                     <Icon name='ion:ios-arrow-right' /> Tempat tinggal : <span>Cimahi, Jawa barat, Indonesia
                        <Icon name="flag:id-4x3" />
                     </span>
                  </li>
                  <li>
                     <Icon name='ion:ios-arrow-right' /> Usia : <span>20</span>
                  </li>
               </ul>
            </div>
         </div>
      </div>
      <div id="skill-page" class="id-section">
         <div class="wrapper">
            <div class="icon-image-wrap">
               <img v-for="icon in skillIcons" :key="icon" :src="`https://skillicons.dev/icons?i=${icon}&theme=dark`" alt="" width="54" height="54" class="skill-icon" :title="icon" >
            </div>
         </div>
      </div>
      <!-- <div id="contact" class="id-section">
         <div class="wrapper">
            <form action="">
               <input type="text" placeholder="Email" />
            </form>
         </div>
      </div> -->
      <div id="projects" class="id-section">
         <div class="wrapper">
            <h2 class="text-default">Coming soon</h2>
         </div>
      </div>
   </div>
</template>