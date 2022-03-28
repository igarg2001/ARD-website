<template>
  <div class="outline">
    <div class="number">{{ number }}</div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "NumberCapsule",
  props: {
    number: String,
    text: String,
  },
};
</script>

<style scoped>
.outline {
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 2px #888888;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-width: 345px;
  z-index: 5;
  background: white;
}

.number {
  font-family: "AmsiPro", sans-serif;
  font-size: 1.92vw;
  font-weight: 900;
  color: #F16582;
  text-align: center;
  margin-bottom: 5px;
}

.text {
  font-family: "AmsiProNarw", sans-serif;
  font-size: 0.88vw;
  font-weight: 600;
  color: #21244f;
}

@media screen and (max-width: 780px) {
  .outline {
    min-width: 0px;
    width: 85vw;
    padding: 10px;
  }

  .number {
    font-family: "Maven Pro", sans-serif;
    font-size: 5vw;
    font-weight: 700;
    color: var(--orange);
    text-align: center;
    margin-bottom: 0px;
  }

  .text {
    font-size: 3.6vw;
    font-weight: 700;
    color: #21244f;
  }
}
</style>
