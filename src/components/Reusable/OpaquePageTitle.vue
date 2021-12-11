<template>
  <div class="opaquePageTitle">
    <div class="text">{{ normal }} &nbsp;<span class="em"> {{ emphasis }}</span></div>
    
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    normal: String,
    emphasis: String,
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
.opaquePageTitle .text {
  width: 50%;
  text-align: center;
}
.em {
  color: #ff9233;
}
</style>