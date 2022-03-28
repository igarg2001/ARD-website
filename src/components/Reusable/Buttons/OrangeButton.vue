<template>
  <div
    v-bind:class="[
      type === 'filled' ? 'filled' : 'filled',
      type === 'outline' ? 'outline' : null,
      fontColor === 'black' ? 'black' : null,
      color ? 'color' : null,
      flexibleWidth ? 'width' : null,
      flexibleHeight ? 'height' : null,
      'button',
    ]"
    v-bind:style="{
      color: customColor,
      background: type === 'filled' ? customBackground : (type === 'outline' ? 'transparent' : 'white'),
      borderColor: customBorder
    }"
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
    fontColor: String,
    flexibleWidth: Boolean,
    flexibleHeight: Boolean,
    customColor: String,
    customBackground: String,
    customBorder: String
  },
};
</script>

<style scoped>
.button {
  font-family: "AmsiPro", sans-serif;
  color: white;
  padding: 10px;
  cursor: pointer;
  font-weight: 900;
}

.filled {
  background-color: #ffffff;
  border: none;
}

.outline {
  transition: all 0.2s ease;
  border-width: 3px;
  border-style: solid;
  border-color: white;
}

.outline:hover {
  animation: scaleOnHover 0.5s ease forwards;
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


@keyframes scaleOnHover {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>