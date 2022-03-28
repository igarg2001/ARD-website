<template lang="">
 <Header id="header" />
<OpaquePageTitle normal="Alumni Relations Cell" />
            <PageSection>
            <template #heading>Meet the Team</template>
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
        <div class="carouselContainer">
           <FourInAPageSlider :data="teamData"/>
        </div>
        <PageSection>
           <template #heading>Student's Alumni Relations Cell (SARC)</template>
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
<OrangeButton displayText="Pilani" type="filled" customBorder="#F16582" customColor="white" customBackground="#F16582"  />
<OrangeButton displayText="Goa" type="outline" customBorder="#F16582" customColor="#F16582" customBackground="#F16582"/>
<OrangeButton displayText="Hyderabad" type="outline" customBorder="#F16582" customColor="#F16582" customBackground="#F16582"/>
<OrangeButton displayText="Dubai" type="outline" customBorder="#F16582" customColor="#F16582" customBackground="#F16582"/>
</div>
          <div class="carouselContainer">
           <FourInAPageSlider :data="teamData"/>
        </div>
    
</template>

<script>
import Header from "../components/Reusable/Header.vue";
import PageSection from "../components/Reusable/PageSection.vue";
import FourInAPageSlider from "../components/Reusable/FourInAPageSlider.vue";
import OpaquePageTitle from "../components/Reusable/OpaquePageTitle.vue";
import OrangeButton from "../components/Reusable/Buttons/OrangeButton.vue"
const teamData = [
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
      "Raj Kumar Sharma manages the donations and the fund management of the Alumni Relations Division. ",
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
      "Ramesh Saini is the Office Assistant Database Management of the Alumni Relations Division. ",
    fullContent: "All info about John Doe",
    image: "Ramesh.jpg",
  },
  {
    id: 11,
    title: "Santosh Kumar Saini",
    smallContent:
      " Santosh Kumar Saini is the Assistant Office Superintendent.",
    fullContent: "All info about John Doe",
    image: "Santosh Saini.jpg",
  },
];
export default {
  data: () => {
    return {
      teamData,
    };
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
  /* margin-top: -8% */
}

.carouselContainer {
  margin-top: -8%
}
#buttonCont {
  width: 85%;
  margin-left: 7.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8%;
  margin-top: -6%

}
#buttonCont > div {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
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