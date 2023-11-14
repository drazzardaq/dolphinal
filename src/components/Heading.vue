<template>
  <header class="flex fixed top-0 inset-x-0 w-full items-center py-5 px-3 xl:px-12 transition duration-500 z-50 bg-white text-slate-900 shadow-lg shadow-slate-200/20">
    <router-link to="/" class="flex items-center text-2xl font-bold hover:text-accent">
      Dolphinal
    </router-link>
    <div class="ml-auto hidden xl:flex items-center">
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
      <router-link :to="{ hash: '#faq' }" class="hover:text-accent">
        FAQ
      </router-link>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Heading',
})
</script>
