<template>
  <div class="container">
    <div class="contentContainer">
      <div class="headline">
        <slot name="headline"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <OrangeButton
        class="orangeButtonNews"
        displayText="Read full article"
        type="filled"
      />
    </div>
    <div class="imageContainer">
      <slot name="image"></slot>
    </div>
  </div>
</template>

<script>
import OrangeButton from "../components/Reusable/Buttons/OrangeButton";

export default {
  name: "NewsObject",
  components: {
    OrangeButton,
  },
};
</script>

<style scoped>
.container {
  margin: auto;
  width: 88%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: white; */
  color: #08070a;
}

.contentContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 75%;
  /* background-color: grey; */
  text-align: left;
}

.imageContainer {
  height: 75%;
  width: 100%;
  margin-left: 30px;
  /* background-color: pink; */
}

.headline {
  font-weight: 800;
  font-size: 38px;
  text-transform: uppercase;
}

.content {
  font-size: 16px;
  height: 100%;
}

.orangeButtonNews {
  width: 100% !important;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 19px;
}

@media screen and (max-width: 780px) {
  .container {
    /* background-color: #bbbbbb; */
    width: 80%;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    height: 65vh;
  }

  .contentContainer {
    height: max-content;
  }

  .imageContainer {
    margin-left: 0;
    margin-bottom: 8px;
    max-height: 48vh;
  }

  .headline {
    font-size: 6vw;
  }

  .content {
    font-size: 3vw;
    margin-bottom: 8px;
    max-height: 160px;
    text-overflow: ellipsis;
  }

  .orangeButtonNews {
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 4vw;
  }
}
</style>
