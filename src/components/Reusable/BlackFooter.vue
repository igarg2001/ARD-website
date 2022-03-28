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
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color:  #F0F0FF;
    color: #fff;
}

.text {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
    color: #1D74B7;
    font-family: "Urby", sans-serif;
    font-weight: 700;
    font-size: 46px;
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
