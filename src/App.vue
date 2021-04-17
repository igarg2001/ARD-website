<template>
  <HomePage />
</template>

<script>
import HomePage from "./pages/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: "Baloo 2", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #211912;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
