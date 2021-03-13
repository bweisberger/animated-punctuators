<template>
  <div class="sentence-wrapper">
    <slot/>
    <slot name="hero"/>
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
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 650px) {
  .sentence-wrapper {
    margin: 100px 80px;
  }
}
</style>
