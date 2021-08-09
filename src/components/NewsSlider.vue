<template>
  <vueper-slides
    :breakpoints="breakpoints"
    class="no-shadow"
    fade
    :touchable="false"
  >
    <vueper-slide
      v-for="i in 4"
      :key="i"
      :style="'background-color: ' + ['white', 'white'][i % 2]"
    >
      <template v-slot:content>
        <NewsObject>
          <template #headline>News Headline #{{ i }}</template>
          <template #content>
            <p>
              Premier engineering and science institute BITS Pilani has
              announced that it received a $1 million pledge from a US-based
              alumni couple for its campus programmes, the largest individual
              donation ever received by the institution. The couple -- Prashanth
              and Anuradha Palakurthi -- made the announcement on Friday, during
              the ruby anniversary celebrations of Prashanth’s 1978-83 batch.
            </p>
          </template>
          <template #image>
            <img
              :src="'https://etimg.etb2bimg.com/photo/48858705.cms'"
              alt="News image"
            />
          </template>
        </NewsObject>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import NewsObject from "../components/NewsObject";

export default {
  name: "NewsSlider",
  components: { VueperSlides, VueperSlide, NewsObject },
  data: () => ({
    breakpoints: {
      780: {
        fixedHeight: "80vh",
      },
    },
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
.imageContainer img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.vueperslides__arrow {
  color: var(--orange);
}

.vueperslides__bullets:not(.vueperslides__bullets--outside) {
  color: var(--orange);
  opacity: 0.75;
}

.vueperslides__bullet {
  transform: scale(0.5);
}

.vueperslides__bullet--active {
  opacity: 1;
  transform: scale(1);
}

@media screen and (max-width: 780px) {
  .newsSliderContainer .vueperslides__arrow--prev {
    left: -0.6em;
  }

  .newsSliderContainer .vueperslides__arrow--next {
    right: -0.6em;
  }

  .newsSliderContainer .vueperslides__arrow svg {
    width: 3em;
  }
}
</style>

<style scoped>
@media screen and (max-width: 780px) {
  .vueperslide {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
