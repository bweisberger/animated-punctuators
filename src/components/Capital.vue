<template>
  <span class="container clickable" @click="toggleCapital">
    <p class="inline-h1 text" :style="styleObject">{{letter}}</p>
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
    size: {
      type: Number
    }
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
        '--text-color--hover': this.textColor.hover,
        // 'font-size': this.size
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
    transition: all 3s ease;
    animation: black-hole 1s linear both;
    color: var(--text-color);
  }

  @keyframes black-hole {
    0% {font-size: 50px; opacity: 100%;}
    100% {font-size: 10px; opacity: 0%;}
  }
  .text:hover {
    color: var(--text-color--hover);
  }
  .container {
    padding: 2px;
    width: 100px;
    min-width: 100px;
  }
  .clickable {
  cursor: pointer;
}
</style>
