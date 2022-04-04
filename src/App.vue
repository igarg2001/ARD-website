<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@font-face {
  font-display: auto;
  font-family: "Urby";
  src: url("~@/fonts/Urby Regular.otf");
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-display: auto;
  font-family: "Urby";
  src: url("~@/fonts/Urby Black.otf");
  font-style: normal;
  font-weight: 900;
}
@font-face {
  font-display: auto;
  font-family: "Urby";
  src: url("~@/fonts/Urby Bold.otf");
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-display: auto;
  font-family: "AmsiProNarw";
  src: url("~@/fonts/AmsiProNarw-Regular.otf");
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-display: auto;
  font-family: "AmsiProNarw";
  src: url("~@/fonts/AmsiProNarw-Light.otf");
  font-style: normal;
  font-weight: 200;
}
@font-face {
  font-display: auto;
  font-family: "AmsiProNarw";
  src: url("~@/fonts/AmsiProNarw-Bold.otf");
  font-style: normal;
  font-weight: 600;
}
@font-face {
  font-display: auto;
  font-family: "AmsiProCond";
  src: url("~@/fonts/AmsiProCond-Light.otf");
  font-style: normal;
  font-weight: 300;
}
@font-face {
  font-display: auto;
  font-family: "AmsiPro";
  src: url("~@/fonts/AmsiPro-Black.otf");
  font-style: normal;
  font-weight: 900;
}
@font-face {
  font-display: auto;
  font-family: "AmsiPro";
  src: url("~@/fonts/AmsiPro-Regular.otf");
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-display: auto;
  font-family: "AmsiPro";
  src: url("~@/fonts/AmsiPro-Bold.otf");
  font-style: normal;
  font-weight: 700;
}
@font-face {
  font-display: auto;
  font-family: "AmsiPro";
  src: url("~@/fonts/AmsiPro-SemiBold.otf");
  font-style: normal;
  font-weight: 600;
}
#app {
  font-display: auto;
  font-family: "Baloo 2", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #211912;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}

::-webkit-scrollbar-track {
  width: 0;
  background: transparent;
}
</style>
