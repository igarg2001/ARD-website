<template>
  <div class="container">
    <div class="text">
      <slot name="text"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlackFooter",
};
</script>

<style scoped>
.container {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: #000;
    color: #fff;
}

.text {
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 780px) {
}
</style>
