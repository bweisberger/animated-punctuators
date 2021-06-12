<template>
  <div class="panel">
    <section class="projectile-container">
      <slot name="projectile" />
    </section>
    <div class="text-hero-container">
      <section class="text-container">
        <slot name="text" />
      </section>
      <section class="hero-container">
        <slot name="hero" class="hero" />
      </section>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Panel",
};
</script>

<style scoped>
.panel {
  height: auto;
  width: calc(100% - 84px);
  display: flex;
  justify-content: space-between;
  margin: 0;
}

.text-hero-container {
  display: flex;
  justify-content: space-between;
}
.text-container {
  width: 75%;
  padding-left: 12px;
}

.hero-container {
  display: flex;
  z-index: -1;
  height: 200px;
  width: auto;
}

.projectile-container {
  display: flex;
  width: 75%;
  height: 100px;
  justify-content: center;
  z-index: -2;
}
</style>
