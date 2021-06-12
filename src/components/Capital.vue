<template>
  <span class="container clickable" @click="toggleCapital">
    <p class="inline-h1 text" :class="toggleClass" :style="styleObject">{{letter}}</p>
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
      type: String
    }
  },
  data() {
    return {
      capital: false,
      letter: this.text.toLowerCase(),
      toggleClass: '',
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
      }
    }
  },
  methods: {
    toggleCapital() {
      if (!this.capital) {
        this.toggleClass = "toggled"
        this.capital = true;
        this.$emit('click');
        setTimeout(() => {
          this.letter = this.letter.toUpperCase();
        }, 2000)
      }
    }
  }
}
</script>

<style scoped>
  .text {
    color: var(--text-color);
    font-family: Sans-Serif;
    font-weight: 500;
    display: inline;
    font-size: 30px;
  }

  .text.toggled {
    animation: black-hole 4s linear both;
  }

  @keyframes black-hole {
    0% {font-size: 30px; opacity: 100%; transform: rotate(0deg);}
    50% {font-size: 10px; opacity: 0%; transform: rotate(180deg);}
    100% {font-size: 30px; opacity: 100%; transform: rotate(0deg);}
  }


  .text:hover {
    color: var(--text-color--hover);
  }
  .container {
    width: 100px;
    min-width: 100px;
  }
  .clickable {
  cursor: pointer;
}
</style>
