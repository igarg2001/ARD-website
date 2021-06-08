<template lang="">
    <div id="heroContainer">
        <Header id="header" :isOpaque="false" />
        <div id="heroSection">
            <img src="../assets/images/team_hero.png">
            <div class="overlay">
                <p>ALUMNI RELATIONS TEAM</p>
            </div>
        </div>
    </div>
    <div id="pageSection">
        <PageSection>
            <template #heading>ALUMNI RELATIONS CELL</template>
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
    </div>
    
</template>

<script>
import Header from "../components/Reusable/Header.vue";
import PageSection from "../components/Reusable/PageSection.vue";
export default {
  name: "TeamPage",
  components: {
    Header,
    PageSection,
  },
};
</script>
<style scoped>
#heroContainer {
  position: relative;
  min-height: 25vw;
}
#header {
  position: absolute;
  top: 0;
}
#heroSection {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100vw;
}
#heroSection img {
  height: auto;
  width: 100%;
}

#heroSection .overlay {
  position: absolute;
  background: rgba(8, 7, 10, 0.8);
  height: 99%;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
#heroSection .overlay p {
  font-family: "Maven Pro", sans-serif;
  font-size: 3vw;
  color: white;
  font-weight: 900;
  white-space: nowrap;
  text-align: center;
  margin-top: 4vh;
}

#contentText {
  width: 85%;
  color: #08070a;

  /* text white shadow */
  text-shadow: 0px 4px 60px #ffffff;
  font-family: "Baloo 2", sans-serif;
  font-size: 23px;
  text-align: center;
}
</style>