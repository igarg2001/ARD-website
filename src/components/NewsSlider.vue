<template>
  <!-- <vueper-slides>
    <vueper-slide
      v-for="i in 4"
      :key="i"
      :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
    >
      <template v-slot:content>
        <i class="icon icon-check"></i>
        Complex content with Vue.js
        {{ 1 === 1 ? "interpreted" : "non-interpreted" }} compilable content &
        <span v-pre>{{ mustaches }}</span
        >.
      </template>
    </vueper-slide>
  </vueper-slides> -->
  <vueper-slides>
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :title="slide.title"
      :content="slide.content"
    />
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "NewsSlider",
  components: { VueperSlides, VueperSlide },
  data: () => ({
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
</style>