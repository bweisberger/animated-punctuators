<template>
  <div class="hello">
    <h1 class="inline-h1" @click="togglePeriod">{{ msg }}</h1>
    <div class="period-div" @click="togglePeriod">
      <h1 v-if="visible" class="inline-h1" >.</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sentence',
  props: {
    msg: String
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    togglePeriod() {
      this.visible = !this.visible
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
period-div {
  width: 50px;
  height: 50px;
  border: 1px red solid;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
