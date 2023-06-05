<template>
  <button :class="{ red: isRed, blue: !isRed }" @click="toggleColor">点击我</button>
</template>

<script>
export default {
  data() {
    return {
      isRed: true,
    }
  },
  methods: {
    toggleColor() {
      this.isRed = !this.isRed;
    }
  }
}
</script>

<style scoped>
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
</style>
