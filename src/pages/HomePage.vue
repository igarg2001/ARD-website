<template>
  <div id="heroContainer">
    <Header id="header" :isOpaque="false" />
    <HeroSlider />
    <div id="heroTextContent">
      <div id="heroImpactText">
        OUR GREATEST <span class="orange">STRENGTH</span>
      </div>
      <div id="heroSubText">
        BITS Pilani’s alumni — entrepreneurs, researchers, policymakers, and
        above all, leaders — have helped to shape the world we know today.
      </div>
      <div id="heroCTAButtons">
        <OrangeButton displayText="View Merchandise" type="outline" />
        <OrangeButton displayText="Join AlmaConnect" type="filled" />
      </div>
    </div>
  </div>
  <PageSection>
    <template #heading>Impact Numbers</template>
    <template #content>
      <div class="imapctNumberCapsulesContainer">
        <NumberCapsule number="600+" text="Entrepreneurs" />
        <NumberCapsule number="3500+" text="Managers" />
        <NumberCapsule number="450+" text="Academicians" />
      </div>
    </template>
  </PageSection>
  <PageSection>
    <template #heading>Announcements</template>
    <template #content>
      Announcements
    </template>
  </PageSection>
</template>

<script>
import Header from "../components/Reusable/Header";
import HeroSlider from "../components/HeroSlider";
import OrangeButton from "../components/Reusable/Buttons/OrangeButton";
import PageSection from "../components/Reusable/PageSection";
import NumberCapsule from "../components/Reusable/NumberCapsule";

export default {
  name: "HomePage",
  components: {
    Header,
    HeroSlider,
    OrangeButton,
    PageSection,
    NumberCapsule,
  },
};
</script>

<style scoped>
#heroContainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  position: relative;
}

#header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
}

#heroTextContent {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1000;
  text-align: center;
  max-width: 50vw;
}

.orange {
  color: #ff9233;
}

#heroImpactText {
  font-family: "Maven Pro", sans-serif;
  font-size: 4vw;
  color: white;
  font-weight: 900;
  white-space: nowrap;
  text-align: center;
  margin-bottom: 30px;
}

#heroSubText {
  font-size: 28px;
  letter-spacing: 1px;
  margin-bottom: 40px;
  color: white;
}

#heroCTAButtons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#heroCTAButtons > div {
  padding: 15px 40px;
  font-size: 24px;
}

#heroCTAButtons div:first-child {
  margin-right: 60px;
}

.imapctNumberCapsulesContainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.imapctNumberCapsulesContainer > div {
  margin-right: 4vw;
}

.imapctNumberCapsulesContainer > div:last-child {
  margin-right: 0px;
}
</style>
