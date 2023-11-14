<template>
  <div class="flex flex-col items-start">
    <section class="w-full flex flex-wrap items-center justify-center shadow-xl shadow-slate-900/50 pt-48 px-3 xl:px-0">
      <div class="fox-container hidden xl:block" />
      <div class="flex flex-col xl:ml-9">
        <h1 class="text-5xl mb-5">3W of <span class="font-bold">Dolphinal</span></h1>
        <div class="flex flex-col items-start justify-start mt-5">
          <p class="text-accent">What?</p>
          <p>Dolphinal is building blocks provider hosted on GitHub.</p>
        </div>
        <div class="flex flex-col items-start justify-start mt-5">
          <p class="text-accent">Why?</p>
          <p>Providing out-of-the-box instruments for blockchain community.</p>
        </div>
        <div class="flex flex-col items-start justify-start mt-5">
          <p class="text-accent">When?</p>
          <p>Dolphinal.com and its <span class="font-bold">DOL</span> Token are launched on 1 May, 2022.</p>
        </div>
        <p class="mt-9 hidden xl:block">Looking for more?</p>
        <div class="hidden xl:flex items-center">
          <router-link :to="{ hash: '#security' }" class="hover:text-accent mr-5">
            Security
          </router-link>
          <router-link :to="{ hash: '#tokenomics' }" class="hover:text-accent mr-5">
            Tokenomics
          </router-link>
          <router-link :to="{ hash: '#products' }" class="hover:text-accent mr-5">
            Products
          </router-link>
          <router-link :to="{ hash: '#tools' }" class="hover:text-accent mr-5">
            Toolbox
          </router-link>
          <router-link :to="{ hash: '#faq' }" class="hover:text-accent mr-5">
            FAQ
          </router-link>
        </div>
      </div>
      <router-link :to="{ hash: '#security' }" class="mt-48 mb-9 w-full flex items-center justify-center">
        <icon prefix="fas" icon="chevron-down" class="h-16 hover:text-accent cursor-pointer animate-bounce" />
      </router-link>
    </section>
    <section id="security" class="w-full flex flex-wrap items-center justify-center py-48 bg-slate-900 text-white shadow-inner px-3 xl:px-0">
      <div class="flex flex-col w-full xl:w-1/2">
        <h1 class="text-2xl xl:text-5xl mb-9">Bespoke Security</h1>
        <p class="mt-0">BEP20 Standard Compliant.</p>
        <p class="mt-2">BscScan Verified. <a href="https://bscscan.com/token/0x715b4573d7922ACA78cE471dbEa97d2EB4261f41" target="_blank"><icon prefix="fas" icon="arrow-up-right-from-square" class="h-5 ml-1 -mt-1 cursor-pointer hover:text-accent inline-flex" /></a></p>
        <p class="mt-2">Dev Services Utility.</p>
        <p class="mt-2">Fixed Supply of 10m Tokens.</p>
        <p class="mt-2">80% Liquidity Tokens.</p>
        <p class="mt-2">8% PancakeSwap Liquidity Pool.</p>
      </div>
      <icon prefix="fas" icon="shield-halved" class="h-48 ml-9 hidden xl:block" />
    </section>
    <section id="tokenomics" class="w-full flex flex-wrap items-center justify-center py-48 shadow-xl shadow-slate-900/50 px-3 xl:px-0">
      <icon prefix="fas" icon="arrows-turn-to-dots" class="h-48 mr-9 hidden xl:block" />
      <div class="flex flex-col w-full xl:w-1/2 text-right">
        <h1 class="text-2xl xl:text-5xl mb-9">Tokens Allocation</h1>
        <div class="flex flex-col">
          <p class="mt-2">80% Liquidity</p>
          <p class="mt-2">8% Public Sale</p>
          <p class="mt-2">5% Dev Team</p>
          <p class="mt-2">3% Marketing Team</p>
          <p class="mt-2">2% Core Team</p>
          <p class="mt-2">1% Maintenance</p>
          <p class="mt-2">1% Founder</p>
        </div>
      </div>
    </section>
    <section id="products" class="w-full flex flex-wrap items-center justify-center py-48 bg-slate-900 text-white shadow-inner px-3 xl:px-0">
      <div class="flex flex-col w-full xl:w-1/2">
        <h1 class="text-2xl xl:text-5xl mb-9">Products</h1>
        <p class="mt-2">CryptoLock - Liquidity Locker <span class="hidden xl:inline-block text-accent">In progress...</span></p>
        <p class="mt-2">CryptoStak - Staking Solutions</p>
        <p class="mt-2">CryptoMark - Asset Marketing Automation</p>
        <p class="mt-2">CryptoStud - NFT Creator Studio</p>
        <p class="mt-2">CryptoFact - Contract Factories</p>
        <p class="mt-2">CryptoShop - CI of Crypto Payments</p>
        <p class="mt-2">CryptoBrid - Chains Bridging</p>
        <p class="mt-2">CryptoGame - Gaming on Blockchains</p>
        <p class="mt-2">CryptoMana - Assets Manager</p>
      </div>
      <icon prefix="fas" icon="box-open" class="h-48 ml-9 hidden xl:block" />
    </section>
    <section id="tools" class="w-full flex flex-wrap items-center justify-center py-48 shadow-xl shadow-slate-900/50 px-3 xl:px-0">
      <icon prefix="fas" icon="cubes" class="h-48 mr-9 hidden xl:block" />
      <div class="flex flex-col w-full xl:w-1/2 text-right">
        <h1 class="text-2xl xl:text-5xl mb-9">Toolbox</h1>
        <div class="flex flex-col items-end">
          <p class="text-slate-300 cursor-not-allowed"><span class="hidden xl:inline-block text-accent">In progress...</span> 3D Vue Babylon Token Creator</p>
          <p class="text-slate-300 cursor-not-allowed">DolBlock Locker Contract</p>
          <p class="text-slate-300 cursor-not-allowed">MetaMask Vue Token Introducer</p>
          <p class="text-slate-300 cursor-not-allowed">Vite Vue Token Website</p>
          <p class="text-slate-300 cursor-not-allowed">MetaMask Wallet Connect</p>
        </div>
      </div>
    </section>
    <section id="faq" class="w-full flex flex-wrap items-center justify-center py-48 bg-slate-900 text-white shadow-inne px-3 xl:px-0r">
      <div class="flex flex-col w-full xl:w-1/2">
        <h1 class="text-2xl xl:text-5xl mb-9">FAQ</h1>
        <p class="mt-0 text-accent">What's the purpose of Dolphinal?</p>
        <i>Providing the building blocks for the world's Web3 economy transition.</i>
        <p class="mt-5 text-accent">Are your tools free to use?</p>
        <i>Absolutely! Our Open Source tools are available for everyone on GitHub.</i>
        <p class="mt-5 text-accent">When can I/We expect the free tools?</p>
        <i>The due date for the first tool (3D Baby) is 25 May 20XX.</i>
        <p class="mt-5 text-accent">When can I/We expect the products?</p>
        <i>The due date for the first product - CryptoLock launch is 15 July 20XX.</i>
        <p class="mt-5 text-accent">Don't you have a Whitepaper?</p>
        <i>The Whitepaper and Roadmap page will be published on 10 June 20XX.</i>
      </div>
      <icon prefix="fas" icon="circle-question" class="h-48 ml-9 hidden xl:block" />
    </section>

    <div class="flex flex-col w-full bg-slate-900">
      <dolphin main-color="#0f172a" line-color="#1e293b" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ModelViewer from '@metamask/logo'
import Icon from '@/components/Icon.vue'
import Dolphin from '@/components/Dolphin.vue'

export default defineComponent({
  name: 'Home',

  components: {
    Icon,
    Dolphin
  },

  data() {
    return {
      fox: undefined,
      foxContainer: undefined,
    }
  },

  mounted() {
    this.fox = ModelViewer({ pxNotRatio: true, width: 400, height: 320, followMouse: true, slowDrift: false })
    this.foxContainer = document.getElementsByClassName('fox-container')[0]
    this.foxContainer.appendChild(this.fox.container)
  },

  beforeUnmount() {
    this.fox.stopAnimation()
    this.foxContainer.innerHTML = null
  },
})
</script>
