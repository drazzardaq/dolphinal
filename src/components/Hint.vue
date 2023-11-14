<template>
  <div class="px-4 py-2 text-xs rounded-md font-bold absolute w-60 bg-accent-200 shadow-lg shadow-slate-900/10 text-center transition-all duration-500" :class="show ? '-top-10 visible' : '-top-14 invisible z-50'">
    <p class="w-full">{{ content }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hint',

  props: {
    content: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      default: false
    },
  },
})
</script>
