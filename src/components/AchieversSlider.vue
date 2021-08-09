<template>
  <!-- <vueper-slides
    class="no-shadow"
    :visible-slides="3"
    :slide-ratio="1 / 4"
    :dragging-distance="70"
  >
    <vueper-slide v-for="i in 9" :key="i" :title="i.toString()" />
  </vueper-slides> -->
  <vueper-slides
    :breakpoints="breakpoints"
    class="no-shadow"
    :visible-slides="3"
    :slide-ratio="1 / 4"
    :dragging-distance="70"
    :initSlide="2"
    autoplay
  >
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :title="slide.title"
      :content="slide.content"
      :image="slide.image"
    />
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "AchieversSlider",
  components: { VueperSlides, VueperSlide },
  data: () => ({
    breakpoints: {
      780: {
        slideRatio: 1 / 3,
        visibleSlides: 1,
        bullets: false,
        arrows: false,
        fixedHeight: "30vh",
        duration: 3000,
        pauseOnHover: true,
      },
    },
    autoPlaying: true,
    internalAutoPlaying: true,
    slides: [
      {
        id: "slide-1",
        image: require("@/assets/HomePage/AchieversSlides/(1).jpeg"),
      },
      {
        id: "slide-2",
        image: require("@/assets/HomePage/AchieversSlides/(2).jpeg"),
      },
      {
        id: "slide-3",
        image: require("@/assets/HomePage/AchieversSlides/(3).jpeg"),
      },
      {
        id: "slide-4",
        image: require("@/assets/HomePage/AchieversSlides/(4).jpeg"),
      },
      {
        id: "slide-5",
        image: require("@/assets/HomePage/AchieversSlides/(5).jpeg"),
      },
      {
        id: "slide-6",
        image: require("@/assets/HomePage/AchieversSlides/(6).jpeg"),
      },
      {
        id: "slide-7",
        image: require("@/assets/HomePage/AchieversSlides/(7).jpeg"),
      },
      {
        id: "slide-8",
        image: require("@/assets/HomePage/AchieversSlides/(8).jpeg"),
      },
      {
        id: "slide-9",
        image: require("@/assets/HomePage/AchieversSlides/(9).jpeg"),
      },
      {
        id: "slide-10",
        image: require("@/assets/HomePage/AchieversSlides/(10).jpeg"),
      },
    ],
    colors: ["#abc", "346", "#1bd", "#9cf"],
  }),
};
</script>

<style scoped>
.imageContainer img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

::v-global(.vueperslides__bullets) {
  color: var(--orange);
  opacity: 0.75;
}

.vueperslides__bullet {
  transform: scale(0.5);
  opacity: 0.75;
}

.vueperslides__bullet--active {
  opacity: 1;
  transform: scale(1);
}

.vueperslide--active {
  transform: scale(1) !important;
}

.vueperslide {
  transform: scale(0.75);
  transition: 0.2s all ease-in-out;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
