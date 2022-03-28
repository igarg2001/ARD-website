<template>
  <div class="container">
    <div class="contentContainer">
      <div class="headline">
        <slot name="headline"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <router-link to="/news" style="text-decoration: none; color: inherit" class="orangeButtonNews" target="_blank">
        <OrangeButton
        class="orangeButtonNews"
        displayText="Read full article"
        type="filled"
        customBackground="#4F53FF"
        :customStyle="{padding: '10px 0', marginLeft: '15px', fontFamily:'AmsiPro', fontSize: '16px', fontWeight: 900}"
      />
      </router-link>
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
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  /* background-color: white; */
  color: #08070a;
  border-radius: 2px;
  padding: 60px 0;
 
}

.contentContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 88%;
  height: 75%;
  /* background-color: grey; */
  text-align: left;
  margin-top: 10px;
}

.imageContainer {
  height: 75%;
  width: 88%;
  margin-left: 30px;
  /* background-color: pink; */
}
.headline {
  font-family: "Urby", sans-serif;
  font-weight: 400;
  font-size: 18px;
}
.content {
  font-size: 16px;
  height: 100%;
  font-family: "AmsiProNarw", sans-serif;
  font-weight: 300;
  margin-left: 15px;
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
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  a .orangeButtonNews {
    text-decoration: none;
  }
}
</style>
