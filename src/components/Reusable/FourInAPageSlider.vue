<template lang="">
  <div id="wrapper">
  <vueper-slides
  class="no-shadow"
  :visible-slides="4"
  :touchable="false"
  slide-multiple
  :gap="2"
  >
  <vueper-slide v-for="i in data" :key="i">
      <template v-slot:content>
          <div id="slideWrapper" @click="emitter(i)">
              <img :src="getPic(i.image)">
              <div id="title">{{i.title}}</div>
          </div>
      </template>
  </vueper-slide>
</vueper-slides>
<!-- <div class="modal" v-if="isOpen">
  <div>
    <h2>Heading</h2>
    <p>Some filter text</p>
    <button @click="isOpen = false">Close</button>
  </div>
</div> -->
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import TelephoneIcon from "@/assets/svg/telephone-fill.svg";
import EnvelopeIcon from "@/assets/svg/envelope-fill.svg";
export default {
  name: "FourInAPageSlider",
  emits: ["clicked"],
  components: {
    VueperSlides,
    VueperSlide,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      myData: this.data,
      sample: 5,
    };
  },
  setup() {
    return {
      TelephoneIcon,
      EnvelopeIcon,
    };
    },
    methods: {
    getPic(url) {
      return require("@/assets/images/" + url + "");
    },
    emitter(i) {
      this.$emit("clicked", {
        isOpen: true,
        index: i
      });
    }
  },
};
</script>
<style scoped>
#wrapper {
  width: 95%;
  position: relative;
  /* margin-left: 3%; */
}
#slideWrapper {
  background: #ffffff;
  /* Shadow0 */

  /* box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  margin-top: 5%; */
  height: 85%;
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7.5% 5%;
  width: 95%;
  margin-left: 2.5%;
  cursor: pointer;
  transition: transform 0.2s;
  transform: none;
  /* position: relative; */
}

#slideWrapper:hover {
  transform: scale(1.1);
}

#slideWrapper #title {
  font-family: "AmsiPro", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 21px;
  line-height: 36px;
  margin-top: 4%;
  /* identical to box height */
  color: #1d74b7;

  text-align: center;
}
#slideWrapper img {
  height: 80%;
  width: auto;
  max-width: 100%
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

/* .modal {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal > div {
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
} */

@media screen and (max-width: 768px) {
  #wrapper {
    margin-top: -10vh;
  }
  #slideWrapper {
    width: 90%;
    margin-left: 5%;
  }
}
</style>