<template>
  <Panel>
    <template #sentence>
      <Sentence @clicked-period="toggleActiveHero"/>
    </template>
    <template #hero-active v-if="activeHero">
      <img src="../assets/second-period-laser.gif" class="active-hero"/>
    </template>
    <template #hero v-else>
      <img src="../assets/second-period.png" class="static-hero"/>
    </template>
  </Panel>
</template>

<script>
import { Panel, Sentence } from '/src/components';
export default {
  name: 'ComicView',
  components: {
    Panel,
    Sentence,
  },
  data() {
    return {
      activeHero: true
    }
  },
  methods: {
    toggleActiveHero() {
      this.activeHero = true;
      setTimeout(() => {
       this.activeHero = false 
      }, 700);
    }
  }
}
</script>

<style>

</style>