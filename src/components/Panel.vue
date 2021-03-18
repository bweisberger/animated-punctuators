<template>
  <div class="panel">
    <main class="sentence-container">
      <slot name="sentence"/>
    </main>
    <aside class="hero-container">
      <slot name="hero"/>
      <slot name="hero-active"/>
    </aside>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Panel',
}
</script>

<style>
.panel {
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: flex-end;

}
.sentence-container {
  width: 53vw;
  padding-left: 20px;
}

.hero-container {
  display: flex;
  justify-content: flex-end;
  width: 40vw;
  z-index: -1;
  padding-bottom: 20px;
}

.hero-container > .static-hero {
  width: 40%;
}

.hero-container > .active-hero {
  width: 140%;
}

</style>
