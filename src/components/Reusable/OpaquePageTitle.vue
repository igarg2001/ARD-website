<template>
  <div class="opaquePageTitle">
    <div class="text">{{ normal }}</div>
    
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
  height: 358px;
  /* text-transform: uppercase; */
  width: calc(100vw);
  font-family: "Urby", sans-serif;
  font-weight: 900;
  font-size: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(52.23deg, #1D74B7 -18.6%, #4F53FF 30.16%, #F95A78 103.24%);
  opacity: 0.8;
  color: white;
}
.opaquePageTitle .text {
  width: 100%;
  text-align: center;
}
.em {
  color: #ff9233;
}
</style>