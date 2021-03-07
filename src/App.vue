<template>
  <div id='app'>
    <SentenceView/>
  </div>
</template>

<script>
import SentenceView from './views/SentenceView.vue'

export default {
  name: 'App',
  components: {
    SentenceView
  }
}
</script>

<style>
body {
  height: 100%;
}
</style>
