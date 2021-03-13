<template>
  <div class="sentence">
    <p class="inline-h1 clickable">here is the first hero to the show about 6</p>
    <Period text="ft" spaces="end"/>
    <p class="inline-h1 clickable">in stature whose hair is that of a</p>
    <Period text="god" spaces="both"/>
  </div>
</template>

<script>
import Period from './Period.vue'

export default {
  name: 'Sentence',
  components: {
    Period
  },
}
</script>

<style>
.inline-h1 {
  font-size: 2rem;
  font-weight: 700;
  display: inline;
}
</style>
