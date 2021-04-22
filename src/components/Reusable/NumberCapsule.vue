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
.button {
  font-family: "Maven Pro", sans-serif;
  color: white;
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
}

.outline {
  border: 3px solid #ff9233;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-width: 420px;
}

.number {
  font-family: "Maven Pro", sans-serif;
  font-size: 2.4vw;
  font-weight: 700;
  color: #ff9233;
  text-align: center;
  margin-bottom: 5px;
}

.text {
  font-size: 1.1vw;
  font-weight: 700;
  color: #21244f;
}
</style>