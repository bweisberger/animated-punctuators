<template>
  <div class="sentence">
    <p class="inline-h1 clickable" @click="toggleVisible">{{ sentence }}</p>
    <Punctuation :visible="visible"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Punctuation from './Punctuation.vue'

export default {
  name: 'Sentence',
  components: {
    Punctuation
  },
  data() {
    return {
      visible: false
    }
  },
  computed: mapGetters(['sentence']),
  methods: {
    toggleVisible() {
      this.visible = !this.visible
    }
  }
}
</script>

<style>
.inline-h1 {
  font-size: 2rem;
  font-weight: 700;
  display: inline;
}
.clickable {
  cursor: pointer;
}
</style>
