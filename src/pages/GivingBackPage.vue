<template>
 
    <Header :isOpaque="true" />
    <OpaquePageTitle normal="Giving Back" />
  
  <div id="pageSection">
    <PageSection>
      <template #heading>Impact Numbers</template>
      <template #content>
        <div class="imapctNumberCapsulesContainer">
          <NumberCapsule :number="'2555+'" text="Entrepreneurs" />
          <NumberCapsule number="3500+" text="Managers" />
          <NumberCapsule number="450+" text="Academicians" />
          <NumberCapsule :number="'2555+'" text="Entrepreneurs" />
          <NumberCapsule number="3500+" text="Managers" />
          <NumberCapsule number="450+" text="Academicians" />
        </div>
      </template>
    </PageSection>
    <PageSection>
      <template #heading>GIVING TO BITS</template>
      <template #content>
        <div id="contentText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, risus
          egestas massa pretium ultricies neque. Rutrum viverra eu bibendum
          morbi iaculis gravida nisl.
        </div>
        <div id="CTAButtons">
        <router-link to="/alumnigiving" class="routerbuttons">
            <OrangeButton
              displayText="Alumni Giving"
              type="outline"
              color
              style="min-width: 20vw; text-align: center"
            />
          </router-link>
          <router-link to="/csrgiving" class="routerbuttons">
            <OrangeButton
              displayText="Corporate Social Responsibility"
              type="filled"
              style="min-width: 20vw; text-align: center"
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
          type="outline"
          style="min-width: 15vw; text-align: center; margin-right: 2vw"
        />
        <OrangeButton
          displayText="Write an E-Mail"
          type="filled"
          style="min-width: 15vw; text-align: center"
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
import OpaquePageTitle from "../components/Reusable/OpaquePageTitle.vue"

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
    OpaquePageTitle
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
  font-size: 23px;
  text-align: center;
}

.imapctNumberCapsulesContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: -2vw;
}

.imapctNumberCapsulesContainer > div {
  margin-right: 2vw;
  margin-left: 2vw;
  margin-bottom: 2vw;
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
