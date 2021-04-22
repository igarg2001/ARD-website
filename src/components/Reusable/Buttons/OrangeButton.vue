<template>
  <div
    v-bind:class="[
      type === 'filled' ? 'filled' : null,
      type === 'outline' ? 'outline' : null,
      color ? 'color' : null,
      'button',
    ]"
  >
    {{ displayText }}
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.color);
  },
  name: "OrangeButton",
  props: {
    displayText: String,
    type: String,
    color: Boolean,
  },
};
</script>

<style scoped>
.button {
  font-family: "Maven Pro", sans-serif;
  color: white;
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
}

.filled {
  background-color: #ff9233;
  border: 3px solid #ff9233;
}

.outline {
  border: 3px solid #ff9233;
  transition: all 0.2s ease;
}

.outline:hover {
  background-color: #ff9233;
}
.color {
  color: #ff9233;
}
.color:hover {
  color: white;
}
</style>