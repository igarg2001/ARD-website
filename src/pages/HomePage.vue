<template>
  <div id="heroContainer">
    <Header id="header" :isOpaque="true" />
    <HeroSlider />
    <div id="heroTextContent">
      <div id="heroImpactText">Our Strength Comes From You</div>
      <div id="heroSubText">Support us by joining our network</div>
      <div id="heroCTAButtons">
        <OrangeButton displayText="View Merchandise" customColor="#4F53FF" @clicked="openUrl('https://bitspilani.campusmall.in/', true)"/>
        <OrangeButton displayText="Join AlmaConnect" customColor="#F95A78" @clicked="openUrl('https://bitspilani.almaconnect.com/', true)"/>
      </div>
    </div>
  </div>
   <img src="../assets/svg/homeVector.svg" class="homeVector"/>
   <img src="../assets/svg/smallHomeVector.svg" class="homeVector smallHomeVector"/>
  <PageSection>
    <template #heading>Growing Impact</template>
    <template #content>
      <div class="impactNumberDescription">
        Distinguished Alumni Awards 2020 were presented by BITS Pilani, Goa
        Campus for the year of 2020. The event was hosted by the honorable
        Chancellor - Mr. Kumar Mangalam Birla and Vice Chancellor - Prof. Souvik
        Bhattacharyya. The event was well received by various prominent
        personalities including the list of Awardees.
      </div>
      <div class="imapctNumberCapsulesContainer">
        <NumberCapsule :number="num + '+'" text="Entrepreneurs" />
        <NumberCapsule number="3500+" text="Managers" />
        <NumberCapsule number="450+" text="Academicians" />
        <NumberCapsule number="3500+" text="Managers" />
      </div>
    </template>
  </PageSection>
  
  <PageSection>
    <template #heading>Creating headlines</template>
    <template #content>
      <div class="newsSliderContainer">
        <NewsSlider />
      </div>
    </template>
  </PageSection>
  <PageSection>
    <template #heading>Hall Of Fame</template>
    <template #content>
      <div class="achieversSliderContainer">
        <AchieversSlider />
      </div>
    </template>
  </PageSection>
  <div id="galleryContainer">
    <div class="headingCont">
      <div class="headingText whiteHeading">Making stories</div>
    </div>
    <div class="tabs">
      <div
        :class="{ 'tab-item': true, selected: selectActive[0] == true }"
        @click="selectClassMakingStories(0)"
      >
        Student achievements
      </div>
      <div
        :class="{ 'tab-item': true, selected: selectActive[1] == true }"
        @click="selectClassMakingStories(1)"
      >
        Startups and Entrepreneurs
      </div>
      <div
        :class="{ 'tab-item': true, selected: selectActive[2] == true }"
        @click="selectClassMakingStories(2)"
      >
        Prominent leaders
      </div>
      <div
        :class="{ 'tab-item': true, selected: selectActive[3] == true }"
        @click="selectClassMakingStories(3)"
      >
        Scholars and Academicians
      </div>
    </div>
    <ImageGrid />
    <div id="loadMoreButton">
      <OrangeButton
        displayText="LOAD MORE"
        type="outline"
        :flexibleWidth="true"
        customBackground="transparent"
      />
    </div>
  </div>

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
  <BlackFooter>
    <template #text>Are you an alumni?</template>
    <template #buttons>
      <OrangeButton
        displayText="Share your thoughts"
        type="filled"
        customColor="#4F53FF"
        :customStyle="{
          minWidth: '15vw',
          textAlign: 'center',
          padding: '15px 0',
        }"
      />
    </template>
  </BlackFooter>
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
import ImageGrid from "@/components/Reusable/ImageGrid.vue";
import BlackFooter from "@/components/Reusable/BlackFooter.vue";

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
    ImageGrid,
    BlackFooter
  },
  data() {
    return {
      num: 0,
      selectActive: [true, false, false, false],
      isActive: false,
    };
  },
  updated() {
    console.log(this.selectActive);
  },
  async created() {
    // GET request using fetch with async/await
    const response = await fetch("https://api.npms.io/v2/search?q=vue");
    const data = await response.json();
    this.num = data.total;
  },
  methods: {
    selectClassMakingStories: function (i) {
      console.log(this);
      this.selectActive.forEach((part, index, theArray) => {
        theArray[index] = false;
      });
      this.selectActive[i] = true;
    },
    openUrl(url, inNewTab) {
      const blan= inNewTab ? '_blank' : null;
      window.open(url, blan);
    }
  },
};
</script>

<style scoped>
#heroContainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 99.2vw;
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
  font-family: "Urby", sans-serif;
  font-size: 128px;
  color: white;
  font-weight: 900;
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
}

#heroSubText {
  font-family: "AmsiProNarw";
  font-weight: 200;
  font-size: 40px;
  letter-spacing: 1px;
  margin-bottom: 40px;
  color: white;
}

.homeVector {
  position: absolute;
  top: 140vh;
  left: 20vw;
  z-index: -100;
}

.smallHomeVector {
  top: 600vh;
  left: 33vw;
}

#heroCTAButtons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.headingCont {
  margin-top: 2%;
}
.headingText {
  font-family: "Urby", sans-serif;
  font-weight: 700;
  color: #353535;
  font-size: 64px;
  padding-bottom: 20px;
}
.whiteHeading {
  color: white;
}

#galleryContainer {
  width: 100%;
  background: linear-gradient(270deg, #001ea0 0%, #2c45ae 100%);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

#galleryContainer .tabs {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  margin-bottom: 3%;
}

#galleryContainer .tabs .tab-item {
  color: white;
  font-family: "AmsiProNarw", sans-serif;
  font-size: 21px;
  cursor: pointer;
}

#galleryContainer .tabs .selected {
  font-weight: 600;
}

.headingUnderline {
  width: 100%;
  max-width: 15vw;
  height: 10px;
  background-color: #ff9233;
  margin-bottom: 80px;
}

#loadMoreButton {
  width: 10%;
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
  margin-bottom: 4px;
}

.imapctNumberCapsulesContainer > div {
  margin-right: 4vw;
}

.imapctNumberCapsulesContainer > div:last-child {
  margin-right: 0px;
}

.imapctNumberCapsulesContainer > div:first-child {
  margin-left: 4px;
}

.newsSliderContainer {
  width: 85vw;
}

.achieversSliderContainer {
  width: 100%;
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

.impactNumberDescription {
  color: #3f4d8c;
  font-family: "AmsiProCond", sans-serif;
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 4%;
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
