<template lang="">
<div id="wrapper">
    <Header id="header" />
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  name: "HomePage",
  components: {
    Header,
  },
};
</script>
<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
}
</style>
