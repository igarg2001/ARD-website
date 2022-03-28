<template>
  <div class="pageSection">
    <div v-if="hasHeadingSlot" class="pageSectionHeadingContainer">
      <div class="pageSectionHeadingText">
        <slot name="heading"></slot>
      </div>
      <!-- <div class="headingUnderline"></div> -->
    </div>
    <slot name="content"></slot>
    <!-- <slot></slot> -->
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
  overflow: hidden;
  width: 85%;
  margin-left: 7.5%;
}

.pageSectionHeadingContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.pageSectionHeadingText {
  font-family: "Urby", sans-serif;
  font-weight: 700;
  color: #1D74B7;
  /* text-transform: uppercase; */
  font-size: 3vw;
  padding-bottom: 20px;
}

.headingUnderline {
  width: 100%;
  max-width: 15vw;
  height: 10px;
  background-color: var(--orange);
  margin-bottom: 80px;
}

@media screen and (max-width: 780px) {
  .pageSection {
    margin-top: 75px;
    margin-bottom: 100px;
  }

  .pageSectionHeadingText {
    font-family: "Maven Pro", sans-serif;
    font-weight: 800;
    color: #353535;
    text-transform: uppercase;
    font-size: 7vw;
    padding-bottom: 10px;
  }

  .headingUnderline {
    width: 100%;
    max-width: 50vw;
    height: 7px;
    background-color: var(--orange);
    margin-bottom: 40px;
  }
}
</style>
