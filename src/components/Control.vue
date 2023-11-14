<template>
  <button type="button" name="button" class="button bg-gradient-to-l hover:bg-gradient-to-r" :class="color + '-button'" :disabled="disable">
    <slot />
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Control',

  props: {
    color: {
      type: String,
      required: true
    },
    disable: {
      type: Boolean,
      default: false
    },
  },
})
</script>
