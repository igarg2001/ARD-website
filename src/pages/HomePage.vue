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
        <NumberCapsule :number="num + '+'" text="Entrepreneurs" />
        <NumberCapsule number="3500+" text="Managers" />
        <NumberCapsule number="450+" text="Academicians" />
      </div>
    </template>
  </PageSection>
  <PageSection>
    <template #heading>Thank you Donors</template>
    <template #content>
      <div class="newsSliderContainer">
        <NewsSlider />
      </div>
    </template>
  </PageSection>
  <PageSection>
    <template #heading>BITSians in News</template>
    <template #content>
      <div class="achieversSliderContainer">
        <AchieversSlider />
      </div>
    </template>
  </PageSection>
  <PageSection>
    <template #heading>Quick Links</template>
    <template #content>
      <div class="quickLinksContainer">
        <BackgroundWithTextTile
          displayText="ALUMNI RELATIONS CELL"
          link="https://localhost:4000"
          image="../assets/HomePage/AchieversSlides/(9).jpeg"
        />
        <BackgroundWithTextTile
          displayText="DISTINGUISHED ALUMNI AWARDS"
          link="https://localhost:4000"
          image="../assets/HomePage/AchieversSlides/(9).jpeg"
        />
        <BackgroundWithTextTile
          displayText="REUNIONS"
          link="https://localhost:4000"
          image="../assets/HomePage/AchieversSlides/(9).jpeg"
        />
        <BackgroundWithTextTile
          displayText="EVENTS"
          link="https://localhost:4000"
          image="../assets/HomePage/AchieversSlides/(9).jpeg"
        />
        <BackgroundWithTextTile
          displayText="GIVING BACK TO BITS"
          link="https://localhost:4000"
          image="../assets/HomePage/AchieversSlides/(9).jpeg"
        />
        <BackgroundWithTextTile
          displayText="ECHO NEWSLETTERS"
          link="https://localhost:4000"
          image="../assets/HomePage/AchieversSlides/(9).jpeg"
        />
        <BackgroundWithTextTile
          displayText="MERCHANDISE"
          link="https://localhost:4000"
          image="../assets/HomePage/AchieversSlides/(9).jpeg"
        />
        <BackgroundWithTextTile
          displayText="VIEW GALLERY"
          link="https://localhost:4000"
          image="../assets/HomePage/AchieversSlides/(9).jpeg"
        />
      </div>
    </template>
  </PageSection>
</template>

<script>
import Header from "@/components/Reusable/Header";
import HeroSlider from "@/components/HeroSlider";
import OrangeButton from "@/components/Reusable/Buttons/OrangeButton";
import PageSection from "@/components/Reusable/PageSection";
import NumberCapsule from "@/components/Reusable/NumberCapsule";
import NewsSlider from "@/components/NewsSlider";
import AchieversSlider from "@/components/AchieversSlider";
import BackgroundWithTextTile from "@/components/Reusable/Buttons/BackgroundWithTextTile";

export default {
  name: "HomePage",
  components: {
    Header,
    HeroSlider,
    OrangeButton,
    PageSection,
    NumberCapsule,
    NewsSlider,
    AchieversSlider,
    BackgroundWithTextTile,
  },
  data() {
    return {
      num: 0,
    };
  },
  async created() {
    // GET request using fetch with async/await
    const response = await fetch("https://api.npms.io/v2/search?q=vue");
    const data = await response.json();
    this.num = data.total;
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
  color: var(--orange);
}

#heroImpactText {
  font-family: "Maven Pro", sans-serif;
  font-size: 60px;
  color: white;
  font-weight: 900;
  white-space: nowrap;
  text-align: center;
  margin-bottom: 30px;
}

#heroSubText {
  font-size: 24px;
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
  font-size: 19px;
}

#heroCTAButtons div:first-child {
  margin-right: 60px;
}

.imapctNumberCapsulesContainer {
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

.newsSliderContainer {
  width: 85vw;
  border: 2px solid var(--orange);
  box-shadow: 0px 4px 10px 6px rgba(0, 0, 0, 0.1);
  /* height: 300px */
}

.achieversSliderContainer {
  width: 95vw;
}

.quickLinksContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90vw;
}

.quickLinksContainer > div {
  margin: 25px 25px;
}

@media screen and (max-width: 780px) {
  #heroImpactText {
    font-size: 7vw;
  }

  #heroSubText {
    font-size: 5vw;
  }

  #heroCTAButtons {
    flex-direction: column-reverse;
  }

  #heroCTAButtons > div {
    font-size: 4vw;
    width: 90vw;
  }

  #heroCTAButtons div:first-child {
    margin-top: 20px;
    margin-right: 0;
  }

  .imapctNumberCapsulesContainer {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .imapctNumberCapsulesContainer > div {
    margin-bottom: 20px;
    margin-right: 0px;
  }

  .imapctNumberCapsulesContainer > div:last-child {
    margin-bottom: 0px;
  }

  .newsSliderContainer {
    height: max-content;
    width: 95vw;
  }

  .quickLinksContainer {
    width: 95vw;
  }

  .quickLinksContainer > div {
    margin: 10px 10px;
  }
}
</style>
