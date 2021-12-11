<template>
  <div
    v-bind:class="[
      type === 'filled' ? 'filled' : null,
      type === 'outline' ? 'outline' : null,
      color ? 'color' : null,
      flexibleWidth ? 'width' : null,
      flexibleHeight ? 'height': null,
      'button',
    ]"
  >
    {{ displayText }}
  </div>
</template>

<script>
export default {
  name: "OrangeButton",
  props: {
    displayText: String,
    type: String,
    color: Boolean,
    flexibleWidth: Boolean,
    flexibleHeight: Boolean,
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
  background-color: var(--orange);
  border: 3px solid var(--orange);
}

.outline {
  border: 3px solid var(--orange);
  transition: all 0.2s ease;
}

.outline:hover {
  background-color: var(--orange);
}
.color {
  color: var(--orange);
}
.color:hover {
  color: white;
}
.width {
  width: 100%;
  text-align: center;
}
.height {
  height: 100%;
  text-align: center;
}
</style>