<template>
  <div class="wrapper">
    <Panel>
      <template #text>
        <Sentence 
          @clicked-period="toggleLaserHero"
          @clicked-capital="toggleGrenadeHero"
        />
      </template>
      <template #hero>
        <img  
          v-if="laserHero" 
          src="../assets/second-period-laser.gif" 
          class="laser-hero hero"
        />
        <img  
          v-else-if="grenadeHero" 
          src="../assets/Grenade_Final.png" 
          class="grenade-hero hero"
        />
        <img 
          v-else 
          src="../assets/second-period.png" 
          class="static-hero hero"
        />
      </template>
      <template #projectile>
        <img  
          v-if="grenade" 
          src="../assets/Grenade_Flight.png" 
          class="grenade"
        />
      </template>
    </Panel>
  </div>
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
      laserHero: false,
      grenadeHero: false,
      grenade: false
    }
  },
  methods: {
    toggleLaserHero() {
      this.laserHero = true;
      setTimeout(() => {
       this.laserHero = false 
      }, 700);
    },
    toggleGrenadeHero() {
      this.grenadeHero = true;
      setTimeout(() => {
        this.grenadeHero = false;
      }, 1300);
      setTimeout(() => {
        this.grenade = true;
      }, 1000);
    }
  }
}
</script>

<style>
.header {
  height: 20vh;
}
.footer {
  height: 20vh;
}
.hero {
  position: relative;
}

.static-hero {
  width: 150px;
}

.laser-hero {
  width: 500px;
  height: 300px;
  top: 40px;
}

.grenade-hero {
  width: 600px;
  height: 800px;
  top: -200px;
  left: 80px;
}

.grenade {
  width: 750px;
  height: 1000px;
  position: relative;
  top: -300px;
  left: -140px;
}
</style>