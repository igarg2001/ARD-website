<template>
  <div class="pageSection">
    <div v-if="hasHeadingSlot" class="pageSectionHeadingContainer">
      <div class="pageSectionHeadingText">
        <slot name="heading"></slot>
      </div>
      <div class="headingUnderline"></div>
    </div>
    <slot name="content"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PageSection",
  computed: {
    hasHeadingSlot() {
      return !!this.$slots["heading"];
    },
  },
};
</script>

<style>
.pageSection {
  margin-top: 100px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.pageSectionHeadingContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.pageSectionHeadingText {
  font-family: "Maven Pro", sans-serif;
  font-weight: 800;
  color: #353535;
  text-transform: uppercase;
  font-size: 2.32vw;
  padding-bottom: 20px;
}

.headingUnderline {
    width: 100%;
    max-width: 15vw;
    height: 10px;
    background-color: var(--orange);
    margin-bottom: 80px;
}
</style>