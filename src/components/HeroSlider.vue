<template>
  <div id="fullPage">
    <div id="overlay"></div>
    <vueper-slides
      fixed-height="100vh"
      ref="myVueperSlides"
      autoplay
      :dragging-distance="100"
      :pause-on-hover="pauseOnHover"
      duration="6000"
      @autoplay-pause="internalAutoPlaying = false"
      @autoplay-resume="internalAutoPlaying = true"
      :parallax= 1
      :parallax-fixed-content= false
      :arrows="false"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="slide.id"
        :image="slide.image"
        :title="parallaxFixedContent ? slide.title : ''"
        :content="parallaxFixedContent ? slide.content : ''"
        :style="'background-color: ' + colors[i % 4]"
      />
      <template v-slot:pause>
        <i class="icon pause_circle_outline"></i>
      </template>
    </vueper-slides>
  </div>
</template>


<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "HeroSlider",
  components: { VueperSlides, VueperSlide },
  data: () => ({
    pauseOnHover: false,
    parallax: 1,
    parallaxFixedContent: false,
    autoPlaying: true,
    internalAutoPlaying: true,
    slides: [
      {
        id: "slide-1",
        title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
        content:
          'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        image: require("@/assets/HomePage/1.png"),
      },
      {
        id: "slide-2",
        title: 'Slide <b style="font-size: 1.3em;color: yellow">#2</b>',
        content:
          'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        image: require("@/assets/HomePage/2.jpeg"),
      },
      {
        id: "slide-3",
        title: 'Slide <b style="font-size: 1.3em;color: yellow">#3</b>',
        content:
          'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        image: require("@/assets/HomePage/3.jpg"),
      },
      {
        id: "slide-4",
        title: 'Slide <b style="font-size: 1.3em;color: yellow">#4</b>',
        content:
          'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
        image: require("@/assets/HomePage/4.png"),
      },
    ],
    colors: ["#abc", "346", "#1bd", "#9cf"],
  }),
};
</script>

<style>
#fullPage {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top:0;
  left:0;
}

#overlay {
  width: 100%;
  height: 100%;
  background-color: #08070a;
  opacity: 0.75;
  z-index: 500;
  position: absolute;
}

.vueperslides--fixed-height {
  height: 100vh;
}

.vueperslides__bullets{
  z-index: 501;
}
</style>