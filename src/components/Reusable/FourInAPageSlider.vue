<template lang="">
  <div id="wrapper">
      <vueper-slides
  class="no-shadow"
  :visible-slides="4"
  slide-multiple
  :gap="3"
  :slide-ratio="1 / 2.5"
  :dragging-distance="200"
  :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
  <vueper-slide v-for="i in data" :key="i">
      <template v-slot:content>
          <div id="slideWrapper">
              <img :src="getPic(i.image)">
              <div id="title">{{i.title}}</div>
              <div id="smallContent">{{i.smallContent}}</div>
              <div id="icons">
                <img :src="TelephoneIcon" alt="telephone" />
                <img :src="EnvelopeIcon" alt="envelope" />
              </div>
          </div>
      </template>
  </vueper-slide>
</vueper-slides>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import TelephoneIcon from "@/assets/svg/telephone-fill.svg";
import EnvelopeIcon from "@/assets/svg/envelope-fill.svg"
export default {
  created() {
    // this.myData.map(i => console.log(typeof(i.image)))
  },
  name: "FourInAPageSlider",
  components: {
    VueperSlides,
    VueperSlide,
  },
  props: ["data"],
  data() {
    return {
      myData: this.data,
    };
  },
  setup() {
    return {
      TelephoneIcon,
      EnvelopeIcon
    };
  },
  methods: {
    getPic: (url) => {
      return require("@/assets/images/TeamImages/" + url + "");
    },
  },
};
</script>
<style scoped>
#wrapper {
  width: 94%;
  margin-left: 3%;
}
#slideWrapper {
  background: #ffffff;
  /* Shadow0 */

  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  margin-top: 5%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7.5% 10%;
  /* position: relative; */
}

#slideWrapper #title {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  margin-top: 4%;
  /* identical to box height */
  color: #211d70;
  text-align: center;
}
#slideWrapper img {
  height: 40%;
  width: auto;
}
#slideWrapper #smallContent {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  margin-top: 4%;
  color: #211912;
}

#slideWrapper #icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 10%;
  width: 50%;
}
#slideWrapper #icons img {
  width: 25px;
  height: 25px;
}
</style>