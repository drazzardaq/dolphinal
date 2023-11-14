import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBook, faCubes, faCircleQuestion, faArrowsTurnToDots, faBoxOpen, faChevronUp, faChevronDown, faShieldHalved, faCoins, faPlus, faMeteor, faSquareUpRight, faTruckMedical, faWallet, faInfo, faCheckCircle, faTimes, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Home from './pages/Home.vue'
import Staking from './pages/Staking.vue'
import Whitepage from './pages/Whitepage.vue'
import Toast from 'vue-toastification'
import '@/assets/css/master.css'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/staking', name: 'Staking', component: Staking },
  { path: '/whitepage', name: 'Whitepage', component: Whitepage },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: -10 }
    if (savedPosition) return savedPosition
    else return { left: 0, top: 0 }
  },
  routes,
})

library.add(faTwitter, faGithub, faMeteor, faBook, faCubes, faCircleQuestion, faArrowsTurnToDots, faBoxOpen, faChevronUp, faChevronDown, faShieldHalved, faCoins, faPlus, faSquareUpRight, faTruckMedical, faWallet, faInfo, faCheckCircle, faTimes, faArrowUpRightFromSquare)

createApp(App).use(router).use(Toast).mount('#app')
