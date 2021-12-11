<template>
  <Header :isOpaque="true" />
  <OpaquePageTitle
    title="CORPORATE SOCIAL RESPONSIBILTY"
    normal="Corporate Social Responsibility"
    emphasis="Giving at BITS PIlani"
  />
  <PageSection>
    <template #heading>OVERVIEW</template>
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
  <PageSection>
    <template #heading>ELIGIBLE AREAS UNDER CSR</template>
    <template #content>
      <div id="CSRgridWrapper">
        <div class="gridLine">
          <div class="box">MCN Scholarships</div>
          <div class="box">MCN Scholarships</div>
          <div class="box">MCN Scholarships</div>
          <div class="box">MCN Scholarships</div>
        </div>
        <div class="gridLine">
          <div class="box">MCN Scholarships</div>
          <div class="box">MCN Scholarships</div>
          <div class="box">MCN Scholarships</div>
          <div class="box">MCN Scholarships</div>
        </div>
        <div id="buttonWrapper">
          <div id="button">
            <OrangeButton
              displayText="View full list"
              type="filled"
              :flexibleWidth="true"
            ></OrangeButton>
          </div>
        </div>
      </div>
    </template>
  </PageSection>
  <PageSection>
    <template #heading>ONGOING PROJECTS</template>
    <template #content>
      <div id="projectsWrapper">
        <div id="selectionWrapper">
          <div
            class="selection"
            :class="{ active: state.selectionClasses[0] }"
            @click="clickSelection(0)"
          >
            INNOVATION &#38; ENTREPRENEURSHIP
          </div>
          <div
            class="selection"
            :class="{ active: state.selectionClasses[1] }"
            @click="clickSelection(1)"
          >
            SCHOLARSHIPS
          </div>
          <div
            class="selection"
            :class="{ active: state.selectionClasses[2] }"
            @click="clickSelection(2)"
          >
            RESEARCH
          </div>
        </div>
        <div id="resultsWrapper">
          <div id="results">Found {{ results }} projects sorted by</div>
          <div id="dropdown">
            <!-- <v-select v-model="initialValue" :options="['Promos', 'Adverts', 'Others']"></v-select> -->
            <select>
              <option>Priority</option>
              <option>DateAdded (newest)</option>
              <option>DateAdded (oldest)</option>
            </select>
          </div>
        </div>
        <vueper-slides
          fixed-height="125vh"
          class="no-shadow slider"
          arrows-outside
          bullets-outside
        >
          <vueper-slide v-for="slide in slides" :key="slide.id">
            <template #content>
              <ProjectTemplate />
              <ProjectTemplate />
              <ProjectTemplate />
            </template>
          </vueper-slide>
        </vueper-slides>
        <!-- <ProjectTemplate />
        <ProjectTemplate />
        <ProjectTemplate /> -->
      </div>
    </template>
  </PageSection>
  <PageSection>
    <template #heading> OUR PARTNERS </template>
    <template #content>
      <div id="partnersWrapper">
        <div class="line">
          <div class="item">
            <img src="../assets/CSR/BITSP_Logo.png" />
            <div class="text">BITS Pilani</div>
          </div>
          <div class="item">
            <img src="../assets/CSR/BITSP_Logo.png" />
            <div class="text">BITS Pilani</div>
          </div>
          <div class="item">
            <img src="../assets/CSR/BITSP_Logo.png" />
            <div class="text">BITS Pilani</div>
          </div>
          <div class="item">
            <img src="../assets/CSR/BITSP_Logo.png" />
            <div class="text">BITS Pilani</div>
          </div>
          <div class="item">
            <img src="../assets/CSR/BITSP_Logo.png" />
            <div class="text">BITS Pilani</div>
          </div>
        </div>
        <div class="line">
          <div class="item">
            <img src="../assets/CSR/BITSP_Logo.png" />
            <div class="text">BITS Pilani</div>
          </div>
          <div class="item">
            <img src="../assets/CSR/BITSP_Logo.png" />
            <div class="text">BITS Pilani</div>
          </div>
          <div class="item">
            <img src="../assets/CSR/BITSP_Logo.png" />
            <div class="text">BITS Pilani</div>
          </div>
          <div class="item">
            <img src="../assets/CSR/BITSP_Logo.png" />
            <div class="text">BITS Pilani</div>
          </div>
        </div>
      </div>
    </template>
  </PageSection>
  <div>
    <div></div>
  </div>
</template>

<script>
import { reactive } from "vue";
import Header from "../components/Reusable/Header";
import OpaquePageTitle from "../components/Reusable/OpaquePageTitle";
import PageSection from "../components/Reusable/PageSection";
import OrangeButton from "../components/Reusable/Buttons/OrangeButton.vue";
import ProjectTemplate from "../components/Reusable/ProjectTemplate.vue";
// import vSelect from "vue-select"
import { VueperSlides, VueperSlide } from "vueperslides";
const state = reactive({
  selectionClasses: [],
});

console.log("script");

export default {
  name: "CSRGiving",
  components: {
    Header,
    OpaquePageTitle,
    PageSection,
    ProjectTemplate,
    OrangeButton,
    VueperSlides,
    VueperSlide,
    // vSelect
  },
  methods: {
    clickSelection(id) {
      this.state.selectionClasses = this.state.selectionClasses.map((s) => {
        console.log(s);
        return false;
      });

      this.state.selectionClasses[id] = true;
    },
  },
  data() {
    console.log("data()");
    let results = 9;
    let initialValue = "Promos";
    let slides = [
      {
        id: "page #1",
        content: "<h1>Hi<h1>",
      },
      {
        id: "page #2",
        content: "<h1>Hi<h1>",
      },
      {
        id: "page #3",
        content: "<h1>Hi<h1>",
      },
      {
        id: "page #4",
        content: "<h1>Hi<h1>",
      },
      {
        id: "page #5",
        content: "<h1>Hi<h1>",
      },
    ];
    return {
      state,
      results,
      initialValue,
      slides,
    };
  },
  mounted() {
    console.log("mounted()");
    //  console.log(state, this.state)
    // let self = this;
    let classArray = [];
    [].forEach.call(
      document.getElementsByClassName("selection"),
      (el, index) => {
        let val = el.classList.contains("active") ? true : false;
        if (index === 0) val = true;
        classArray.push(val);
      }
    );
    this.state.selectionClasses = classArray;
  },
};
</script>

<style scoped>
#contentText {
  width: 85%;
  color: #08070a;

  /* text white shadow */

  text-shadow: 0px 4px 60px #ffffff;
  font-family: "Baloo 2", sans-serif;
  font-size: 21px;
  text-align: center;
  margin-top: -2%;
}
#CSRgridWrapper {
  width: 80%;
  padding: 5% 5%;
  /* margin-left: 7.5%; */
}
#CSRgridWrapper .gridLine {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2%;
}
#CSRgridWrapper .gridLine:last-child {
  margin-bottom: 0;
}
#CSRgridWrapper .gridLine .box {
  background: #ffffff;
  border: 1px solid #21244f;
  padding: 1.5% 3%;
  border-radius: 2px;
  font-family: "Baloo 2", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
}
#CSRgridWrapper #buttonWrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#CSRgridWrapper #buttonWrapper #button {
  width: 10%;
}
#projectsWrapper {
  width: 85%;
  padding: 2.5% 5%;
}
#projectsWrapper #selectionWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4%;
}
#projectsWrapper #selectionWrapper .selection {
  height: 14.4vh;
  border: 1px solid #f57515;
  box-sizing: border-box;
  border-radius: 2px;
  width: 100%;
  margin-right: 5%;
  text-align: center;
  font-family: Maven Pro;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  color: #f57515;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #ffffff;
  transition: background-color 0.2s ease-in;
}
#projectsWrapper #selectionWrapper .selection:hover {
  background-color: #f57515;
  color: white;
}
#projectsWrapper #selectionWrapper .selection:last-child {
  margin-right: 0;
}
#projectsWrapper #selectionWrapper .active {
  background-color: #f57515;
  color: white;
}
#resultsWrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 4%;
}
#resultsWrapper #results {
  margin-right: 1%;
  font-family: Baloo 2;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: #08070a;
}
#resultsWrapper #dropwdown {
  margin-bottom: 4vh;
}
#resultsWrapper #dropdown select {
  font-family: Maven Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: #08070a;
  padding: 2% 4%;
  border: 2px solid #08070a;
  border-radius: 2px;
  background: #ffffff;
}
#partnersWrapper {
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#partnersWrapper .line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

#partnersWrapper .line:first-child {
  margin-bottom: 6%;
}

#partnersWrapper .line .item {
  font-family: Baloo 2;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #08070a;

  /* text white shadow */

  text-shadow: 0px 4px 60px #ffffff;
}
#partnersWrapper .line .item .text {
  margin-top: 2%;
}
</style>