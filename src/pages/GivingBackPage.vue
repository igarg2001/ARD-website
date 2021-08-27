<template>
  <Header :isOpaque="false" />
  <OpaquePageTitle title="Giving Back" />
  <PageSection style="margin-bottom: 120px;">
    <template #heading>Your Impact</template>
    <template #content>
      <div class="recents">
        
      </div>
    </template>
  </PageSection>
  <PageSection>
    <template #heading>Giving to BITS</template>
    <template #content>
      yubvirkegjfngfnbfujbjkkj
    </template>
  </PageSection>
</template>

<script>
import Header from "../components/Reusable/Header";
import OpaquePageTitle from "../components/Reusable/OpaquePageTitle";
import PageSection from "../components/Reusable/PageSection";
export default {
  name: "GivingBackPage",
  components: {
    Header,
    OpaquePageTitle,
    PageSection,
  },
  data() {
    return {
      newsletters: [
        {
          id: 1,
          title: "Anecdote of BITSian Storytellers",
          year: 2021,
          volume: 4,
          issue: 3,
          imagePath: "Newsletters/echo33.png",
        },
        {
          id: 2,
          title: "An indefinite journey of BITS Pilani Entrepreneurs",
          year: 2021,
          volume: 4,
          issue: 2,
          imagePath: "Newsletters/echo44.png",
        },
        {
          id: 3,
          title: "BITSians shaping Education around the World",
          year: 2021,
          volume: 4,
          issue: 1,
          imagePath: "Newsletters/echo43.png",
        },
        {
          id: 4,
          title: "Finding opportunities in Covid-19 Crisis",
          year: 2020,
          volume: 3,
          issue: 3,
          imagePath: "Newsletters/echo42.png",
        },
        {
          id: 5,
          title: "The mind behind Amazon Alexa",
          year: 2020,
          volume: 3,
          issue: 2,
          imagePath: "Newsletters/echo40.png",
        },
        {
          id: 6,
          title: "BITS Women leading the way",
          year: 2020,
          volume: 3,
          issue: 1,
          imagePath: "Newsletters/echo41.png",
        },
      ],
      pastNewsletters: [
        {
          id: 1,
          title: "Anecdote of BITSian Storytellers",
          year: 2021,
          volume: 4,
          issue: 3,
          imagePath: "Newsletters/echo33.png",
        },
        {
          id: 2,
          title: "An indefinite journey of BITS Pilani Entrepreneurs",
          year: 2021,
          volume: 4,
          issue: 2,
          imagePath: "Newsletters/echo44.png",
        },
        {
          id: 3,
          title: "BITSians shaping Education around the World",
          year: 2021,
          volume: 4,
          issue: 1,
          imagePath: "Newsletters/echo43.png",
        },
        {
          id: 4,
          title: "Finding opportunities in Covid-19 Crisis",
          year: 2020,
          volume: 3,
          issue: 3,
          imagePath: "Newsletters/echo42.png",
        },
        {
          id: 5,
          title: "The mind behind Amazon Alexa",
          year: 2020,
          volume: 3,
          issue: 2,
          imagePath: "Newsletters/echo40.png",
        },
        {
          id: 6,
          title: "BITS Women leading the way",
          year: 2020,
          volume: 3,
          issue: 1,
          imagePath: "Newsletters/echo41.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.recents {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100vw;
}

.recents > div {
  margin: 0px 4%;
  margin-bottom: 80px;
}

.pastRelease {
  text-decoration: none;
  font-size: 1.3em;
  margin-bottom: 40px;
  text-align: center;
  line-height: 0.96;
  color: #21244F;
}

.pastRelease:hover {
  text-decoration: underline;
}
</style>
