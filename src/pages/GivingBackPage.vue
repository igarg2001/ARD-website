<template>
  <Header :isOpaque="true" />
  <OpaquePageTitle normal="Giving Back" />

  <div id="pageSection">
    <PageSection>
      <template #heading>Your Impact</template>
      <template #content>
        <div id="contentText">
          Distinguished Alumni Awards 2020 were presented by BITS Pilani, Goa
          Campus for the year of 2020. The event was hosted by the honorable
          Chancellor - Mr. Kumar Mangalam Birla and Vice Chancellor - Prof.
          Souvik Bhattacharyya. The event was well received by various prominent
          personalities including the list of Awardees.
        </div>
        <div class="imapctNumberCapsulesContainer">
          <NumberCapsule :number="'2555+'" text="Entrepreneurs" />
          <NumberCapsule number="3500+" text="Managers" />
          <NumberCapsule number="450+" text="Academicians" />
          <NumberCapsule :number="'2555+'" text="Entrepreneurs" />
        </div>
      </template>
    </PageSection>
    <PageSection>
      <template #heading>Giving to BITS</template>
      <template #content>
        <div id="contentText">
          Distinguished Alumni Awards 2020 were presented by BITS Pilani, Goa
          Campus for the year of 2020. The event was hosted by the honorable
          Chancellor - Mr. Kumar Mangalam Birla and Vice Chancellor - Prof.
          Souvik Bhattacharyya. The event was well received by various prominent
          personalities including the list of Awardees.
        </div>
        <div id="CTAButtons">
          <router-link to="/alumnigiving" class="routerbuttons">
            <OrangeButton
              displayText="Alumni Giving"
              type="filled"
              customBackground="#F16582"
              customColor="white"
              :customStyle="{
                minWidth: '40vw',
                textAlign: 'center',
                padding: '40px 0',
                fontFamily: 'Urby',
                fontWeight: '900',
                fontSize: '32px',
              }"
            />
          </router-link>
          <router-link to="/csrgiving" class="routerbuttons">
            <OrangeButton
              displayText="Corporate Social Responsibility"
              type="filled"
              customBackground="#F16582"
              customColor="white"
              :customStyle="{
                minWidth: '40vw',
                textAlign: 'center',
                padding: '40px 0',
                fontFamily: 'Urby',
                fontWeight: '900',
                fontSize: '32px',
              }"
            />
          </router-link>
        </div>
      </template>
    </PageSection>
    <BlackFooter>
      <template #text> Wishing to donate? Get in touch! </template>
      <template #buttons>
        <OrangeButton
          displayText="Call Us @99999-99999"
          type="filled"
          customColor="#4F53FF"
          :customStyle="{
            minWidth: '15vw',
            textAlign: 'center',
            marginRight: '2vw',
            padding: '15px 0',
          }"
        />
        <OrangeButton
          displayText="Write an email"
          type="filled"
          customColor="#F95A78"
          :customStyle="{
            minWidth: '15vw',
            textAlign: 'center',
            marginRight: '2vw',
            padding: '15px 0',
          }"
        />
      </template>
    </BlackFooter>
  </div>
</template>

<script>
import Header from "../components/Reusable/Header.vue";
import PageSection from "../components/Reusable/PageSection.vue";
import NumberCapsule from "@/components/Reusable/NumberCapsule";
import OrangeButton from "@/components/Reusable/Buttons/OrangeButton";
import BlackFooter from "@/components/Reusable/BlackFooter";
import OpaquePageTitle from "../components/Reusable/OpaquePageTitle.vue";

export default {
  data: () => {
    return {};
  },
  name: "GivingBackPage",
  components: {
    Header,
    PageSection,
    NumberCapsule,
    OrangeButton,
    BlackFooter,
    OpaquePageTitle,
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
.imapctNumberCapsulesContainer {
  margin-top: 4%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5vw;
}

.imapctNumberCapsulesContainer > div {
  margin-right: 1vw;
  margin-left: 1vw;
}

.imapctNumberCapsulesContainer > div:first-child {
  margin-left: 0;
}

.imapctNumberCapsulesContainer > div:last-child {
  margin-right: 0;
}

#CTAButtons {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#CTAButtons > div {
  /* padding: 15px 40px; */
  font-size: 19px;
}

#CTAButtons div:first-child {
  margin-right: 60px;
}

.routerbuttons {
  height: 100%;
  text-decoration: none;
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

  .imapctNumberCapsulesContainer {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 0vw;
  }

  .imapctNumberCapsulesContainer > div {
    margin-bottom: 20px;
    margin-right: 0px;
  }

  .imapctNumberCapsulesContainer > div:last-child {
    margin-bottom: 0px;
  }

  #CTAButtons {
    flex-direction: column-reverse;
  }

  #CTAButtons > div {
    font-size: 4vw;
    width: 90vw;
  }

  #CTAButtons div:first-child {
    margin-top: 20px;
    margin-right: 0;
  }
}
</style>
