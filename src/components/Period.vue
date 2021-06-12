<template>
  <span class="container clickable" @click="togglePeriod">
    <p v-if="period" class="inline-h1 text" :style="styleObject">{{withPeriod}}</p>
    <p v-else class="inline-h1 text" :style="styleObject">{{withoutPeriod}}</p>
  </span>
</template>

<script>
export default {
  name: "Period",
  props: {
    text: {
      type: String,
      required: true,
    },
    spaces: {
      type: String,
    },
    size: {
      type: String
    }
  },
  data() {
    return {
      period: false,
      textColor: {
        base: "#0000000",
        hover: "#c9c4c3",
      },
    };
  },
  computed: {
    withPeriod() {
      if (this.spaces === "both") {
        return ` ${this.text}. `;
      } else if (this.spaces === "front") {
        return ` ${this.text}.`;
      } else if (this.spaces === "end") {
        return `${this.text}. `;
      } else {
        return `${this.text}.`;
      }
    },
    withoutPeriod() {
      if (this.spaces === "both") {
        return ` ${this.text} `;
      } else if (this.spaces === "front") {
        return ` ${this.text}`;
      } else if (this.spaces === "end") {
        return `${this.text} `;
      } else {
        return `${this.text}`;
      }
    },
    styleObject() {
      return {
        "--text-color": this.textColor.base,
        "--text-color--hover": this.textColor.hover,
      };
    },
  },
  methods: {
    togglePeriod() {
      if (!this.period) {
        this.period = true;
        this.$emit("click");
      }
    },
  },
};
</script>

<style scoped>
.text {
  font-size: 30px;
  color: var(--text-color);
  font-family: Sans-Serif;
  font-weight: 500;
  display: inline;
}
.text:hover {
  color: var(--text-color--hover);
}
.container {
  display: inline;
}
.blank-space {
  color: white;
}
.clickable {
  cursor: pointer;
}
</style>
