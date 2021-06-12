<template>
  <div id='app'>
    <Header class="header"/>
    <ComicView class="comic-view"/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import ComicView from './views/ComicView.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    ComicView,
    Header,
    Footer
  }
}
</script>
<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>


