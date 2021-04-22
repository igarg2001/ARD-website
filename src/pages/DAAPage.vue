<template lang="">
<div id="heroContainer">
    <Header id="header" :isOpaque="false"/>
    <HeroSlider />
    <div id="heroTextContent">
      <div id="heroImpactText">
        DISTINGUISHED ALUMNI <span class="orange">AWARDS</span>
      </div>
      <div id="heroSubText">
        Every year, BITS Pilani feels proud to celebrate and felicitate its alumni who have made significant contributions in their field of operations. Constituted in 2011. 
      </div>
      <div id="heroCTAButtons">
        <OrangeButton displayText="Eligibility criteria" type="outline" />
        <OrangeButton displayText="Nominations for 2021" type="filled" />
      </div>
    </div>
  </div>
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
    <OrangeButton displayText="2020" type="filled" />
      <OrangeButton displayText="2019" type="outline" color/>
       <OrangeButton displayText="2018" type="outline" color/>
        <OrangeButton displayText="2017" type="outline" color/>
         <OrangeButton displayText="2016" type="outline" color/>
 </div>
 <div id="awardeesCarouselContainer">
     <div id="headingText">LIST OF AWARDEES</div>
 </div>
</template>
<script>
import Header from "../components/Reusable/Header";
import HeroSlider from "../components/HeroSlider";
import OrangeButton from "../components/Reusable/Buttons/OrangeButton";
import PageSection from "../components/Reusable/PageSection";
export default {
  name: "HomePage",
  components: {
    Header,
    HeroSlider,
    OrangeButton,
    PageSection,
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
#contentText {
  width: 85%;
  color: #08070a;

  /* text white shadow */

  text-shadow: 0px 4px 60px #ffffff;
  font-family: "Baloo 2", sans-serif;
  font-size: 26px;
  text-align: center;
}
#buttonCont {
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-left: 2.5%
}
#buttonCont > div {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0
}
#headingText {
  font-family: "Maven Pro", sans-serif;
  font-weight: 800;
  color: #353535;
  text-transform: uppercase;
  font-size: 2.9vw;
  padding-bottom: 20px;
}
#awardeesCarouselContainer {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 2.5%;
    margin-top: 4%
}
</style>
