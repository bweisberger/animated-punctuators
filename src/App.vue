<template>
  <div id='app'>
    <Header/>
    <ComicView/>
    <About/>
    <!-- <router-view></router-view> -->
    <Footer/>
  </div>
</template>

<script>
import ComicView from './views/ComicView.vue'
import About from './views/About'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
  components: {
    ComicView,
    About,
    Header,
    Footer
  }
}
</script>


