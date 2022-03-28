<template>
  <Header :isOpaque="true" />
  <OpaquePageTitle normal="Echo Newsletters" />
  <PageSection style="margin-bottom: 120px">
    <template #heading>Our daily-weekly magazine</template>
    <template #content>
      <div id="contentText">
        Distinguished Alumni Awards 2020 were presented by BITS Pilani, Goa
        Campus for the year of 2020. The event was hosted by the honorable
        Chancellor - Mr. Kumar Mangalam Birla and Vice Chancellor - Prof. Souvik
        Bhattacharyya. The event was well received by various prominent
        personalities including the list of Awardees.
      </div>
      <div class="recents">
        <NewsletterTile
          v-for="newsletter in newsletters"
          :key="newsletter.id"
          :title="newsletter.title"
          :year="newsletter.year"
          :volume="newsletter.volume"
          :issue="newsletter.issue"
          :imagePath="newsletter.imagePath"
        />
      </div>
    </template>
  </PageSection>
  <PageSection>
    <template #heading>Past Releases</template>
    <template #content>
      <a
        v-for="pastNewsletter in pastNewsletters"
        href="https://www.google.com"
        :key="pastNewsletter.id"
        class="pastRelease"
      >
        <strong>{{ pastNewsletter.title }}</strong> <br />Volume
        {{ pastNewsletter.volume }} | Issue {{ pastNewsletter.issue }}
      </a>
    </template>
  </PageSection>
</template>

<script>
import Header from "../components/Reusable/Header";
import OpaquePageTitle from "../components/Reusable/OpaquePageTitle";
import PageSection from "../components/Reusable/PageSection";
import NewsletterTile from "../components/NewsletterTile";
export default {
  name: "NewslettersPage",
  components: {
    Header,
    OpaquePageTitle,
    PageSection,
    NewsletterTile,
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
#contentText {
  /* text white shadow */
  text-shadow: 0px 4px 60px #ffffff;
  font-family: "AmsiProCond", sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: #3f4d8c;
  margin-bottom: 2%;
}
.recents {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100vw;
}

.recents > div {
  margin: 0px 8%;
  margin-bottom: 80px;
}

.pastRelease {
  text-decoration: none;
  font-size: 1.3em;
  margin-bottom: 40px;
  text-align: center;
  line-height: 0.96;
  color: #21244f;
}

.pastRelease:hover {
  text-decoration: underline;
}
</style>
