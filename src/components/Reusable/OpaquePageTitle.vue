<template>
  <div class="opaquePageTitle">{{ title }}</div>
</template>

<script>
  export default {
    props: {
      title: String,
    },
  };
</script>

<style scoped>
  .opaquePageTitle {
    height: 252px;
    text-transform: uppercase;
    width: 100vw;
    font-family: "Maven Pro", sans-serif;
    font-weight: 800;
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray);
    color: white;
  }
</style>