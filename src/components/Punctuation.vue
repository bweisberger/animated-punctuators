<template>
  <span class="container">
    <p v-if="visible" class="inline-h1">.</p>
    <p v-else class="inline-h1 blank-space">-</p>
  </span>
</template>

<script>
export default {
  name: 'Punctuation',
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    character() {
      if (this.period && this.visible) {
        return '.'
      } else if (this.comma) {
        return ','
      }
      return '-'
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 2px;
  }
  .blank-space {
    color: white;
  }
</style>
