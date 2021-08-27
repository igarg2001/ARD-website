<template>
  <div class="tile">
    <div class="imageContainer">
      <img :src="require('@/assets/' + imagePath + '')" alt="" srcset="" />
    </div>
    <div class="textContainer">
      <div class="title">{{ title }}</div>
      <div class="otherDetails">
        Year: {{ year }} | Volume: {{ volume }} | Issue: {{ issue }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Newsletters",
    props: {
      title: String,
      year: Number,
      volume: Number,
      issue: Number,
      imagePath: String,
    },
  };
</script>

<style scoped>
  .tile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 270px;
  }

  .imageContainer {
    height: 360px;
    width: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .imageContainer > img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
  }

  .textContainer {
    display: flex;
    justify-content: center;
    text-align: left;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    line-height: 1.2;
  }

  .title {
      font-weight: 600;
      font-size:1.2em;
  }
</style>