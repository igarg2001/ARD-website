<template>
  <div id="homeContainer">
    <HeroSlider />
    <Header id="header" />
  </div>
</template>

<script>
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";

export default {
  name: "HomePage",
  components: {
    Header,
    HeroSlider
  },
};
</script>

<style scoped>
#homeContainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}

#header {
  position: absolute;
  top: 0;
  left: 0;
  z-index:10000;
}
</style>
