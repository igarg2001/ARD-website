<template lang="">
  <div id="heroContainer">
    <Header id="header" :isOpaque="false" />
    <HeroSlider />
    <div id="heroTextContent">
      <div id="heroImpactText">
        DISTINGUISHED ALUMNI <span class="orange">AWARDS</span>
      </div>
      <div id="heroSubText">
        Every year, BITS Pilani feels proud to celebrate and felicitate its
        alumni who have made significant contributions in their field of
        operations. Constituted in 2011.
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
        Distinguished Alumni Awards 2020 were presented by BITS Pilani, Goa
        Campus for the year of 2020. The event was hosted by the honorable
        Chancellor - Mr. Kumar Mangalam Birla and Vice Chancellor - Prof. Souvik
        Bhattacharyya. The event was well received by various prominent
        personalities including the list of Awardees.
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
     <div class="headingText">LIST OF AWARDEES</div>
     <FourInAPageSlider :data="daaData" />
 </div>
 <div id="galleryContainer">
   <div class="headingCont">
       <div class="headingText whiteHeading">GALLERY</div>
   <div class="headingUnderline"></div>
   
   </div>
  <ImageGrid />
  <div id="loadMoreButton">
    <OrangeButton displayText="Load More" type="filled" />
  </div>
</template>
<script>
import Header from "../components/Reusable/Header";
import HeroSlider from "../components/HeroSlider";
import OrangeButton from "../components/Reusable/Buttons/OrangeButton";
import PageSection from "../components/Reusable/PageSection";
import ImageGrid from '../components/Reusable/ImageGrid';
import FourInAPageSlider from "../components/Reusable/FourInAPageSlider"
const daaData = [
  {
    id: 1,
    title: "Prof. Arya Kumar",
    smallContent:
      "Prof Arya Kumar is a professor in the Department of Economics and Finance, BITS Pilani. He is the Dean Alumni Relations at BITS Pilani. Prof Arya has a diverse experience of more than 40 years in the educational institutions, research organisations, Banks and Financial Institutions.",
    fullContent: "All info about John Doe",
    image: "Prof Arya Kumar.jpg",
  },
  {
    id: 2,
    title: "Prof. Rajeev Sakhuja",
    smallContent:
      "Prof. Rajeev is the Associate Prof in the Department of Chemistry. He is also the Associate Dean of BITS Pilani, Pilani campus. He joined the institute in 2012 as an Assistant Professor and in 2018, he was promoted to the position of Associate Professor. ",
    fullContent: "All info about John Doe",
    image: "Prof. Rajeev.jpg",
  },
  {
    id: 3,
    title: "Prof. Veeky Baths",
    smallContent:
      "Prof. Veeky is the Associate Prof in the Department of Biological Sciences, BITS Pilani, K.K. Birla Goa Campus. He is also the Associate Dean Alumni Relations of BITS Pilani, K.K. Birla Goa Campus. With over 15 years’ experience in teaching and research, Prof. Veeky has published various research articles in reputed journals and conferences.",
    fullContent: "All info about John Doe",
    image: "Prof Veeky.jpg",
  },
  {
    id: 4,
    title: "Prof. Meenakshi Viswanathan",
    smallContent:
      "Prof. Meenakshi is the Associate Prof in the Department of Physics at BITS Pilani, Hyderabad campus. She joined the institute in 2009 as an Assistant Professor. She is also the Associate Dean of BITS Pilani, Hyderabad campus.",
    fullContent: "All info about John Doe",
    image: "Prof Meenakshi.jpg",
  },
  {
    id: 5,
    title: "Prof. Trupti Gokhale",
    smallContent:
      "Prof. Trupti is an Associate Prof. in the Department of Biotechnology at BITS Pilani, Dubai campus. She is also the Associate Dean Alumni Relations for BITS Pilani, Dubai campus. ",
    fullContent: "All info about John Doe",
    image: "Prof Trupti.jpg",
  },
  {
    id: 6,
    title: "Sachin Arya",
    smallContent:
      "Sachin is the Head, Business Technology Incubator at PIEDS (Pilani Innovation & Entrepreneurship Development Society), BITS Pilani. He is also the Head of the Alumni Relations at BITS Pilani.",
    fullContent: "All info about John Doe",
    image: "Sachin.jpg",
  },
  {
    id: 7,
    title: "Raj Kumar Sharma",
    smallContent:
      "Gerard George is Dean and Lee Kong Chian Chair Professor of Innovation and Entrepreneurship at the Lee Kong Chian School of Business at Singapore Management University. Previously, he was Deputy Dean",
    fullContent: "All info about John Doe",
    image: "Raj.jpg",
  },
  {
    id: 8,
    title: "Saurabh Suman",
    smallContent:
      "Saurabh Suman is the Manager- Communications at BITS Pilani. He joined the institute in 2019.",
    fullContent: "All info about John Doe",
    image: "Saurabh Suman.jpg",
  },
  {
    id: 9,
    title: "Geetika",
    smallContent:
      "Geetika is the content writer at BITS Pilani. She joined the institute in June 2020.",
    fullContent: "All info about John Doe",
    image: "Geetika.jpg",
  },
  {
    id: 10,
    title: "Ramesh Saini",
    smallContent:
      "Gerard George is Dean and Lee Kong Chian Chair Professor of Innovation and Entrepreneurship at the Lee Kong Chian School of Business at Singapore Management University. Previously, he was Deputy Dean",
    fullContent: "All info about John Doe",
    image: "Ramesh.jpg",
  },
  {
    id: 11,
    title: "Santosh Kumar Saini",
    smallContent:
      "Gerard George is Dean and Lee Kong Chian Chair Professor of Innovation and Entrepreneurship at the Lee Kong Chian School of Business at Singapore Management University. Previously, he was Deputy Dean",
    fullContent: "All info about John Doe",
    image: "teamTest.png",
  },
];
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
  }
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
  font-size: 3.2vw;
  color: white;
  font-weight: 900;
  white-space: nowrap;
  text-align: center;
  margin-bottom: 30px;
}

#heroSubText {
  font-size: 22px;
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
  width: 85%;
  color: #08070a;

  /* text white shadow */

  text-shadow: 0px 4px 60px #ffffff;
  font-family: "Baloo 2", sans-serif;
  font-size: 21px;
  text-align: center;
}
#buttonCont {
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 2.5%;
}
#buttonCont > div {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}
.headingText {
  font-family: "Maven Pro", sans-serif;
  font-weight: 800;
  color: #353535;
  text-transform: uppercase;
  font-size: 2.32vw;
  padding-bottom: 20px;
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
  background-color: var(--gray);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}
.headingUnderline {
  width: 100%;
  max-width: 15vw;
  height: 10px;
  background-color: #ff9233;
  margin-bottom: 80px;
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
