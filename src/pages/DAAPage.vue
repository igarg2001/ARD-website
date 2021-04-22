<template lang="">
<div id="wrapper">
    <Header id="header" :isOpaque="false"/>
    <HeroSlider />
  </div>
</template>
<script>
import Header from "../components/Reusable/Header";
import HeroSlider from "../components/HeroSlider";
export default {
  name: "HomePage",
  components: {
    Header,
    HeroSlider,
  },
};
</script>
<style scoped>
#wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  position: relative;
}
#header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
}
</style>
