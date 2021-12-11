<template>
  <Header :isOpaque="true" />
  <div id="pageWrapper">
    <div id="pageLink">
      Home / Alumni NewsDesk / Startups and entreprenuers / News Headline
    </div>
    <div id="title">NEWS HEADLINE</div>
    <div id="contentWrapper">
      <div id="thisNewsWrapper">
        <img src="../assets/News/newspic.png" class="newspic" />
        <div id="textAndHlsWrapper">
          <div id="hlsWrapper">
            <div class="heading">HIGHLIGHTS</div>
            <div class="orange-line"></div>
            <div class="text">BITS Pilani has received a $1M donation</div>
            <div class="orange-line"></div>
            <div class="text">
              Donation came by a US based alumni couple -- Prashant and Anuradha
              Palakurthi
            </div>
          </div>
          <div id="textWrapper">
            Premier engineering and science institute BITS Pilani has announced
            that it received a $1 million pledge from a US-based alumni couple
            for its campus programmes, the largest individual donation ever
            received by the institution. The couple -- Prashanth and Anuradha
            Palakurthi -- made the announcement on Friday, during the ruby
            anniversary celebrations of Prashanth’s 1978-83 batch. More than 200
            alumni of the batch have gathered from all over the world to relive
            their campus memories in the desert town of Pilani in Rajasthan from
            November 16-18. Warmly welcoming the contribution, Prof Souvik
            Bhattacharyya, Vice-Chancellor, BITS Pilani, termed the announcement
            by the Palakurthis as momentous and a game changing gesture . With
            this pledge, BITS Pilani is launching a campaign to set up a Rs 100
            crore Research Endowment Fund. This fund would help provide an
            additional thrust to Research by way of attracting research-driven
            faculty, post-doctoral fellows and research scholars,” he said. Prof
            Bhattacharyya said the donation will also help “provide seed fund
            support to new faculty, and help set up advanced research labs to
            purse institutional research agenda.” “I believe Prashanth and
            Anuradha have started a brilliant endeavour to propel BITS Pilani to
            the next level; I understand they will continue to support and I
            invite other eminent Alumni to support us in our efforts,”
            Bhattacharyya said at the event. Prashanth Palakurthi is the Founder
            and CEO of US-based Reflexis Systems, and his wife Anuradha, the
            founder of Juju Productions, is a professional singer and radio
            personality in the United States. Speaking at the gala event
            commemorating 40 years of his entry to BITS Pilani, Prashanth said
            that we wanted to give back to our alma mater which gave us so much
            and where we started our journey.” Anuradha, who joined BITS in
            1984, said the institute has needs in several areas including
            infrastructure and research. “We hope our contribution is followed
            up by many more from the family of hugely successful alumni, ” she
            said. At the event, Anuradha also performed JuJu Prouctions’ first
            live show, titled Desert Storm, accompanied by a 42-member musical
            band from Bollywood. Prof A K Sarkar, Campus Director, Pilani,
            applauded the donation and said, The Research Endowment Fund would
            be instrumental for our journey to pursue our agenda for Institute
            of Eminence (IoE) in the years to come . The gesture by Prashant
            showcases the love and emotional bonding that BITSians across the
            globe have for their alma mater. His contribution would go a long
            way in inspiring other alumni to give back to BITS in tangible and
            intangible ways, said Prof Arya Kumar, Dean Alumni Relations. BITS
            Pilani was conferred the ‘Institute of Eminence (IoE)’ status in
            July by the Union government alongside IISc Bangalore, IIT Delhi and
            IIT Bombay. BITS Pilani operates from four campuses at Pilani, Goa,
            Hyderabad and Dubai and features in prestigious international and
            national ranking such as QS Asia ranking.
          </div>
        </div>
      </div>
      <div id="otherNewsWrapper">
        <div id="otherStoriesBanner">More such stories &nbsp; &nbsp; >></div>
        <div id="otherStories">
          <div class="story">
            <img src="../assets/News/othernews1.png" class="story-pic" />
            <div class="title">
              Shoutout to BITSian Manufacturers - BITSAA Fights Covid19
            </div>
          </div>
          <div class="story">
            <img src="../assets/News/othernews2.png" class="story-pic" />
            <div class="title">
              xBITS wins Innovation in Health Tech category at 10th ANNUAL AEGIS
              GRAHAM BELL AWARDS
            </div>
          </div>
          <div class="story">
            <img src="../assets/News/othernews1.png" class="story-pic" />
            <div class="title">
              Distinguished Alumni Awards 2020 Announcement
            </div>
          </div>
          <div class="story">
            <img src="../assets/News/othernews2.png" class="story-pic" />
            <div class="title">
              Shoutout to BITSian Manufacturers - BITSAA Fights Covid19
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Reusable/Header.vue";
export default {
  name: "NewsHeadline",
  components: {
    Header,
  },
};
</script>
<style scoped>
#pageWrapper {
  width: 90%;
  margin-left: 5%;
}
#pageLink {
  font-family: Baloo 2;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #21244f;
  margin-top: 1.5%;
}
#title {
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 900;
  font-size: 42px;
  /* identical to box height */

  color: #211912;
  margin-top: 1%;
}
#contentWrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
}
#thisNewsWrapper {
  width: 52%;
  margin-right: 15%;
}
#thisNewsWrapper .newspic {
  width: 100%;
  margin-top: 1%;
}
#otherNewsWrapper {
  width: 25%;
  margin-right: 7.5%;
}
#textAndHlsWrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin-top: 3%;
}
#hlsWrapper {
  width: 25%;
  margin-right: 5%;
}
#hlsWrapper > div:not(:last-child) {
  margin-bottom: 5%;
}
#hlsWrapper .heading {
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  /* identical to box height */

  color: #211912;
}
#hlsWrapper .orange-line {
  width: 80%;
  height: 2.84px;
  background: #f57515;
}
#hlsWrapper .text {
  font-family: Baloo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 28px;

  color: #211912;
}
#textWrapper {
  font-family: Baloo 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #211912;
  width: 70%;
}

#otherNewsWrapper #otherStoriesBanner {
  width: 100%;
  background: #f57515;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  border-radius: 2px;
  color: #ffffff;
  padding: 2% 4%;
}

#otherStories .story {
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 8%;
}
#otherStories .story:hover {
    text-decoration: underline;
}
#otherStories .story img {
  margin-right: 8%;
  border-radius: 2px;
  cursor: pointer;
}

#otherStories .story .title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  color: #211912;
  cursor: pointer;
}
</style>