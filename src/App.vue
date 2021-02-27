<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Sentence msg="here is the first hero to the show about 6 ft in stature whose hair is that of a god"/>
  </div>
</template>

<script>
import Sentence from './components/Sentence.vue'

export default {
  name: 'App',
  components: {
    Sentence
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
