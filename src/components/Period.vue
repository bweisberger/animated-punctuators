<template>
  <span class="container clickable" :style="styleObject" @click="toggleVisible">
    <p v-if="visible" class="inline-h1 text">{{withPeriod}}</p>
    <p v-else class="inline-h1 text">{{withoutPeriod}}</p>
  </span>
</template>

<script>
export default {
  name: 'Period',
  props: {
    text: {
      type: String,
      required: true,
    },
    spaces: {
      type: String,
    }
  },
  data() {
    return {
      visible: false,
      textColor: {
        base: '#0000000',
        hover: 'pink',
      }
    }
  },
  computed: {
    withPeriod() {
      if (this.spaces === 'both') {
        return ` ${this.text}. `;
      } else if (this.spaces === 'front') {
        return ` ${this.text}.`;
      } else if (this.spaces === 'end') {
        return `${this.text}. `;
      } else {
        return `${this.text}.`;
      }
    },
    withoutPeriod() {
      if (this.spaces === 'both') {
        return ` ${this.text} `;
      } else if (this.spaces === 'front') {
        return ` ${this.text}`;
      } else if (this.spaces === 'end') {
        return `${this.text} `;
      } else {
        return `${this.text}`;
      }
    },
    styleObject() {
      return {
        '--text-color': this.textColor.base,
        '--text-color--hover': this.textColor.hover
      }
    }
  },
  methods: {
    toggleVisible() {

      this.visible = true
    }
  }
}
</script>

<style scoped>
  .text {
    color: var('--text-color');
  }
  .text:hover {
    color: var('--text-color--hover');
  }
  .container {
    padding: 2px;
  }
  .blank-space {
    color: white;
  }
  .clickable {
  cursor: pointer;
}
</style>
