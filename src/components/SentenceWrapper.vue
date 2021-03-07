<template>
  <div class="sentence-wrapper">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SentenceWrapper',
}
</script>

<style>
.sentence-wrapper {
  height: 90vh;
  margin: 100px 20px;
}
</style>
