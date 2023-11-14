<template>
  <div class="flex flex-col items-start px-12">
    <section class="w-full flex flex-wrap items-center justify-center">
      <div class="flex flex-col">
        <h1 class="text-5xl mb-5">Whitepage</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <router-link :to="{ hash: '#security' }" class="mt-40 w-full flex items-center justify-center">
        <icon prefix="fas" icon="chevron-down" class="h-16 hover:text-accent cursor-pointer animate-bounce" />
      </router-link>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Icon from '@/components/Icon.vue'

export default defineComponent({
  name: 'Whitepage',

  components: {
    Icon
  }
})
</script>
