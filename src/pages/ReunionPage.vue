<template lang="">
    <Header />
    <OpaquePageTitle normal="Events &#38; Reunions" />
    <PageSection>
        <template #heading>Plan Your Reunion</template>
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
    <CustomCalendar />
    
</template>
<script>
import Header from "../components/Reusable/Header.vue";
import OpaquePageTitle from "../components/Reusable/OpaquePageTitle.vue";
import PageSection from "../components/Reusable/PageSection.vue";
import CustomCalendar from "../components/Reusable/CustomCalendar.vue"
export default {
  name: "ReunionPage",
  components: {
    Header,
    OpaquePageTitle,
    PageSection,
    CustomCalendar
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
</style>