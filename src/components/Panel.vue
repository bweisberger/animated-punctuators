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
        <slot name="hero" />
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

<style>
.panel {
  height: 40vh;
  width: calc(100% - 84px);
  padding: 0 40px;
  display: flex;
  flex-direction: column;
}

.text-hero-container {
  display: flex;
}
.text-container {
  width: 75%;
  padding-left: 20px;
}

.hero-container {
  display: flex;
  justify-content: flex-end;
  width: 25%;
  z-index: -1;
}

.projectile-container {
  display: flex;
  width: 75%;
  height: 100px;
  justify-content: center;
  z-index: -2;
}
</style>
