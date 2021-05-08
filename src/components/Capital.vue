<template>
  <span class="container clickable" @click="toggleCapital">
    <p class="inline-h1 text">{{letter}}</p>
  </span>
</template>

<script>
export default {
  name: 'Capital',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      capital: false,
      letter: this.text,
      textColor: {
        base: '#0000000',
        hover: '#c9c4c3',
      }
    }
  },
  computed: {
    styleObject() {
      return {
        '--text-color': this.textColor.base,
        '--text-color--hover': this.textColor.hover
      }
    }
  },
  methods: {
    toggleCapital() {
      if (!this.capital) {
        this.capital = true;
        this.$emit('click');
        setTimeout(() => {
          this.letter = this.letter.toUpperCase();
        }, 4000)
      }
    }
  }
}
</script>

<style scoped>
  .text {
    color: var(--text-color);
  }
  .text:hover {
    color: var(--text-color--hover);
  }
  .container {
    padding: 2px;
  }
  .clickable {
  cursor: pointer;
}
</style>
