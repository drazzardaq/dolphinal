<template>
  <div ref="main" class="h-screen selection:bg-accent selection:text-white">
    <heading />
    <router-view />
    <footing />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Heading from '@/components/Heading.vue'
import Footing from '@/components/Footing.vue'

export default defineComponent({
  components: {
    Heading,
    Footing,
  },
})
</script>
