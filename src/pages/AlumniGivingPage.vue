<template>
  <Header :isOpaque="true" />
  <OpaquePageTitle title="Alumni Giving" normal="Alumni" emphasis="Giving" />
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
    <template #heading>ONGOING CAMPAIGNS</template>
  </PageSection>
  <div>
    <div>
        
    </div>
    <ProjectTemplate />
  </div>
</template>

<script>
import Header from "../components/Reusable/Header";
import OpaquePageTitle from "../components/Reusable/OpaquePageTitle";
import PageSection from "../components/Reusable/PageSection";
import ProjectTemplate from "../components/Reusable/ProjectTemplate.vue";
export default {
  name: "AlumniGiving",
  components: {
    Header,
    OpaquePageTitle,
    PageSection,
    ProjectTemplate,
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
</style>