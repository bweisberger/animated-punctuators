<template>
  <div id='app'>
    <Header/>
    <ComicView/>
    <Footer/>
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


