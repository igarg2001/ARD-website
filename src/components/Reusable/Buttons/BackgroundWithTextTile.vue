<template>
  <div class="tiledButtonContainer">
    <img
      src="https://i0.wp.com/livewire.thewire.in/wp-content/uploads/2018/05/banner6.jpg?fit=800%2C449&ssl=1"
      alt="tile image"
    />
    <div class="tiledButtonText">{{ displayText }}</div>
  </div>
</template>

<script>
export default {
  name: "BackgroundWithTextTile",
  props: {
    displayText: String,
    link: String,
    image: String,
  },
};
</script>

<style scoped>
.tiledButtonContainer {
  position: relative;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16vw;
  height: 9vw;
  overflow: hidden;
}

.tiledButtonContainer:hover > img {
  transform: scale(115%);
}

.tiledButtonContainer > img {
  position: absolute;
  width: 100%;
  filter: blur(0.4px);
  height: 100%;
  transition: 0.6s all ease;
}

.tiledButtonText {
  z-index: 100;
  padding: 10px;
  font-weight: 700;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
}

@media screen and (max-width: 780px) {
  .tiledButtonContainer {
    width: 40vw;
    height: 22.5vw;
    overflow: hidden;
  }

  .tiledButtonText {
    padding: 10px;
    color: white;
    font-size: 4vw;
    background-color: rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
  }
}
</style>
