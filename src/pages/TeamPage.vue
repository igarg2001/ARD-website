<template lang="">
  <Header id="header" />
  <vue-final-modal v-model="isOpen" content-class="internal__wrapper" classes="modal__container">
      <div class="modal__image">
        <img :src="getPic(teamData[indexToBeAccessed].image)" :alt="teamData[indexToBeAccessed].title"/>
      </div>
      <div class="modal__details">
        <div class="title">{{teamData[indexToBeAccessed].title}}</div>
        <div class="desc">{{teamData[indexToBeAccessed].smallContent}}</div>
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
<OpaquePageTitle normal="Alumni Relations Division" />
            <PageSection>
            <template #heading>Meet the Team</template>
            <template #content>
  <div id="contentText">
    The team of the Alumni Relations Division at BITS Pilani though
    headquartered at the Pilani campus works closely with all the other three
    campuses too. The team led by Prof. Arya Kumar, Dean of Alumni Relations is
    like a bridge- connecting the alumni to their alma mater.
  </div>
</template>
        </PageSection>
        <div class="carouselContainer">
           <FourInAPageSlider :data="teamData" @clicked="updateIsOpen"/>
        </div>
        <PageSection>
           <template #heading>Student's Alumni Relations Cell (SARC)</template>
            <template #content>
            <div id="contentText">
             The Student Alumni Relations Cell (SARC) at each campus works under the aegis of the Dean of
Alumni Relations to strengthen the student-alumni connection.
The teams work in coordination with three major stakeholders- students, the institute, and BITSAA.
These teams represent student intentions at all stages of alumni engagement.
            </div>

          </template>
        </PageSection>
        <div id="buttonCont">
<OrangeButton displayText="Pilani" :componentKey="0" :type="this.activeCampus===0 ? 'filled' : 'outline'" customBorder="#F16582" :customColor="this.activeCampus===0 ? 'white' : '#F16582'" customBackground="#F16582" :customStyle="{fontSize: '22px'}"   @clicked="updateCampus"/>
<OrangeButton displayText="Goa" :componentKey="1" :type="this.activeCampus===1 ? 'filled' : 'outline'" customBorder="#F16582" :customColor="this.activeCampus===1 ? 'white' : '#F16582'" customBackground="#F16582" :customStyle="{fontSize: '22px'}" @clicked="updateCampus"/>
<OrangeButton displayText="Hyderabad" :componentKey="2" :type="this.activeCampus===2 ? 'filled' : 'outline'" customBorder="#F16582" :customColor="this.activeCampus===2 ? 'white' : '#F16582'" customBackground="#F16582" :customStyle="{fontSize: '22px'}" @clicked="updateCampus"/>
<OrangeButton displayText="Dubai" :componentKey="3" :type="this.activeCampus===3 ? 'filled' : 'outline'" customBorder="#F16582" :customColor="this.activeCampus===3 ? 'white' : '#F16582'" customBackground="#F16582" :customStyle="{fontSize: '22px'}" @clicked="updateCampus"/>
</div>
          <div class="imageContainer">
            <img :src="this.getPic(this.campusList[this.activeCampus].url)" alt="SARC" />
        </div>
    
 
</template>

<script>
import Header from "../components/Reusable/Header.vue";
import PageSection from "../components/Reusable/PageSection.vue";
import FourInAPageSlider from "../components/Reusable/FourInAPageSlider.vue";
import OpaquePageTitle from "../components/Reusable/OpaquePageTitle.vue";
import OrangeButton from "../components/Reusable/Buttons/OrangeButton.vue";
import {ref} from "vue";
import {teamData, campusList} from "@/data/teamData"
export default {

  data: () => {
    return {
      teamData,
      campusList,
    };
  },
  setup() {
    const isOpen = ref(false);
    const indexToBeAccessed = ref(0);
    const activeCampus = ref(0);
    return {
      isOpen,
      indexToBeAccessed,
      activeCampus,
    }
  },
  methods: {
    updateIsOpen(v) {
      // console.log(" Update is open")
      this.isOpen = v.isOpen;

      const id = v.index.id;
      console.log(id);
      const condition = (element) => element.id===id;
      const index = teamData.findIndex(condition);
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
    updateCampus(i) {
      console.log("updateCampus()", i)
      this.activeCampus = i.index;
    }
  },
  updated() {
    console.log(this.activeCampus);
  },
  name: "TeamPage",
  components: {
    Header,
    PageSection,
    FourInAPageSlider,
    OpaquePageTitle,
    OrangeButton
  },
};
</script>
<style scoped>
#contentText {
  /* text white shadow */
  text-shadow: 0px 4px 60px #ffffff;
  font-family: "AmsiProCond", sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: #3f4d8c;
}
.carouselContainer {
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2.5%;
  margin-top: -8%;
}
.imageContainer {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-top: -4%;
  margin-bottom: 2%
}

.imageContainer img {
  width: 100%;
  height: auto;
}
#buttonCont {
  width: 55%;
  margin-left: 7.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8%;
  margin-top: -6%

}
#buttonCont > div {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
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
    height: 100%;
  }

  #heroSection .overlay p {
    font-size: 6.5vw;
  }
  #contentText {
    font-size: 17px;
  }
}
</style>