<template>
  <SentenceWrapper>
    <Sentence/>
  </SentenceWrapper>
</template>

<script>
import Sentence from '/src/components/Sentence.vue';
import SentenceWrapper from '/src/components/SentenceWrapper.vue';

export default {
  name: 'SentenceView',
  components: {
    SentenceWrapper,
    Sentence
  }
}
</script>