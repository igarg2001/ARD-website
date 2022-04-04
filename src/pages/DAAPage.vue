<template lang="">
  <div id="heroContainer">
    <Header id="header" :isOpaque="false" />
    <HeroSlider />
    <div id="heroTextContent">
      <div id="heroImpactText">
        Distinguished Alumni Awards
      </div>
      <div id="heroSubText">
        Every year, BITS Pilani feels proud to celebrate and felicitate its
        alumni who have made significant contributions in their field of
        operations. Constituted in 2011.
      </div>
      <div id="heroCTAButtons">
        <OrangeButton displayText="Eligibility criteria" type="filled" customColor="#4F53FF" />
        <OrangeButton displayText="Nominations for 2021" type="filled" customColor="#F95A78"/>
      </div>
    </div>
  </div>
   <vue-final-modal v-model="isOpen" content-class="internal__wrapper" classes="modal__container">
      <div class="modal__image">
        <img :src="getPic(daaData[indexToBeAccessed].image)" :alt="daaData[indexToBeAccessed].title"/>
      </div>
      <div class="modal__details">
        <div class="title">{{daaData[indexToBeAccessed].title}}</div>
        <div class="desc">{{daaData[indexToBeAccessed].smallContent}}</div>
        <div class="socialIcons">
          <img src="@/assets/svg/FB.svg" alt="facebook"/>
          <img src="@/assets/svg/IG.svg" alt="instagram"/>
          <img src="@/assets/svg/Linkedin.svg" alt="linkedin"/>
        </div>
        <div class="closeModalIcon" @click="closeModal">
            <img src="@/assets/svg/CloseModal.svg" />
        </div>
      </div>
    
  </vue-final-modal>
  <PageSection>
    <template #heading>DISTINGUISHED ALUMNI AWARDS</template>
    <template #content>
        <div id="contentText">
           Distinguished Alumni Awards 2020 were presented by BITS Pilani, Goa Campus
          for the year of 2020. The event was hosted by the honorable Chancellor - Mr.
          Kumar Mangalam Birla and Vice Chancellor - Prof. Souvik Bhattacharyya. The
          event was well received by various prominent personalities including the
          list of Awardees.
         </div>
        </template>
</PageSection>
<div id="buttonCont">
<OrangeButton displayText="2020" type="filled" customBorder="#F16582" customColor="white" customBackground="#F16582"  />
<OrangeButton displayText="2019" type="outline" customBorder="#F16582" customColor="#F16582" customBackground="#F16582"/>
<OrangeButton displayText="2018" type="outline" customBorder="#F16582" customColor="#F16582" customBackground="#F16582"/>
<OrangeButton displayText="2017" type="outline" customBorder="#F16582" customColor="#F16582" customBackground="#F16582"/>
<OrangeButton displayText="2016" type="outline" customBorder="#F16582" customColor="#F16582" customBackground="#F16582"/>
</div>
 <div id="awardeesCarouselContainer">
     <FourInAPageSlider :data="daaData" @clicked="updateIsOpen"/>
 </div>
 <div id="galleryContainer">
   <div class="headingCont">
       <div class="headingText whiteHeading">Event Snapshots</div>
   </div>
   <ImageGrid />
   <div id="loadMoreButton">
    <OrangeButton displayText="LOAD MORE" type="outline" :flexibleWidth="true" />
  </div>
   </div>

</template>
<script>
import Header from "../components/Reusable/Header";
import HeroSlider from "../components/HeroSlider";
import OrangeButton from "../components/Reusable/Buttons/OrangeButton";
import PageSection from "../components/Reusable/PageSection";
import ImageGrid from '../components/Reusable/ImageGrid';
import FourInAPageSlider from "../components/Reusable/FourInAPageSlider";
import {ref} from 'vue';
import {daaData} from "@/data/daaData"

export default {
  name: "DAAPage",
  components: {
    Header,
    HeroSlider,
    OrangeButton,
    PageSection,
    ImageGrid,
    FourInAPageSlider
  },
  data: () => {
    return {
      daaData
    }
  },
   setup() {
    const isOpen = ref(false);
    const indexToBeAccessed = ref(0);
    return {
      isOpen,
      indexToBeAccessed
    }
  },
  methods: {
      updateIsOpen(v) {
      // console.log(" Update is open")
      this.isOpen = v.isOpen;

      const id = v.index.id;
      console.log(id);
      const condition = (element) => element.id===id;
      const index = daaData.findIndex(condition);
      console.log(this.indexToBeAccessed)
      this.indexToBeAccessed = index;
    },
    openModal() {
      this.updateIsOpen({
        isOpen: true
      })
    },
    closeModal() {
      this.updateIsOpen({
        isOpen: false
      })
    },
      getPic(url) {
      return require("@/assets/images/" + url + "");
    },
  },
};
</script>
<style scoped>
#heroContainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* width: 99.2vw; */
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
}

#heroSubText {
  font-family: "AmsiProNarw";
  font-weight: 200;
  font-size: 23px;
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
#contentText {
  /* text white shadow */
  text-shadow: 0px 4px 60px #ffffff;
  font-family: "AmsiProCond", sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: #3F4D8C;
}
#buttonCont {
  width: 85%;
  margin-left: 7.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between

}
#buttonCont > div {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}
.headingText {
  font-family: "Urby", sans-serif;
  font-weight: 700;
  color: white;
  /* text-transform: uppercase; */
  font-size: 64px;
  margin-bottom: 3%
}
.whiteHeading {
  color: white;
}
#awardeesCarouselContainer {
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2.5%;
  margin-top: 4%;
}
#galleryContainer {
  width: 100%;
  background-color: #4F53FF;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  padding: 3% 5%
}

#loadMoreButton {
  width: 10%;
  align-self: center
}
::v-deep .modal__container {
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep .internal__wrapper {
  padding: 30px;
  background: #fff;
  border-radius: .25rem;
  width: 53vw;
  height: auto;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
}

.modal__image {
  width: 38%;
  height: auto;
}

.modal__image img {
  width: 100%
}

.modal__details {
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.modal__details .title {
  font-family: "AmsiPro", sans-serif;
  font-size: 24px;
  font-weight: 700;
}

.modal__details .desc {
  margin-top: 10px;
  font-family: "AmsiPro", sans-serif;
  font-size: 18px;
  font-weight: 400;
}

.modal__details .socialIcons {
  display: flex;
  flex-direction: row;
  width: 30%;
  align-self: flex-start;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
}

.modal__details .socialIcons img {
  cursor: pointer;
}
.closeModalIcon {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer
}

@media screen and (max-width: 768px) {
  #heroContainer {
    min-height: 50vh;
  }
  #heroSection {
    height: 100%;
  }
  #heroSection img {
    height: 100%;
  }
  #heroSection .overlay {
    height: 100%
  }

  #heroSection .overlay p {
    font-size: 6.5vw;
  }
  #contentText {
    font-size: 17px;
  }
  #heroImpactText {
    font-size: 5.5vw
  }
  #heroSubText {
    font-size: 18px
  }
  #heroCTAButtons {
    flex-direction: column;
    justify-content: center;
    align-items: center
  }
  #heroCTAButtons >div:first-child {
    margin-right: 0;
    margin-bottom: 5vh
  }
  #buttonCont {
    flex-direction: column;
    margin-bottom: 8vh
  }
  #buttonCont > div {
    width: 75%
  }
  #buttonCont > div:nth-last-child(-n+2) {
    display: none
  }
  #buttonCont > div:nth-child(n-2) {
    margin-bottom: 3vh
  }
  .headingText {
    font-size: 4.64vw
  }
}
</style>
