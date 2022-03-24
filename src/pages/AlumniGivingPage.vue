<template>
  <Header :isOpaque="true" />
  <OpaquePageTitle
    title="ALUMNI GIVING"
    normal="Alumni"
    emphasis="GIVING"
    :newLine="true"
  />
  <PageSection>
    <template #heading>OVERVIEW</template>
    <template #content>
      <div id="contentText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in nec sed
        eu. Adipiscing lectus gravida egestas rhoncus interdum. Enim, nisl
        bibendum in nulla gravida urna. Etiam consequat tristique dui magna id
        leo hac diam. Arcu bibendum arcu, pretium maecenas volutpat. Nullam
        maecenas posuere quam sit nunc, sed. Feugiat urna nullam amet non.
        Accumsan nulla malesuada varius et, etiam egestas vestibulum, elementum.
        Integer dolor, ullamcorper molestie id aliquam eget et. Amet commodo
        eleifend adipiscing arcu, mattis ut fames. Nullam sagittis, in est nisi
        nulla quis ut bibendum suspendisse. Purus urna massa in posuere neque
        aliquet gravida dapibus. Cras mattis interdum id amet, gravida. Gravida
        pharetra sollicitudin massa, aliquet nunc tellus diam.
      </div>
    </template>
  </PageSection>
  <PageSection>
    <template #heading>ONGOING PROGRAMS</template>
    <template #content>
      <div class="flexColumn">
        <div class="filters">
          Found 52 programs. Sorted by &nbsp;
          <select>
            <option>Name</option>
            <option>Age</option>
            <option>Amount</option>
          </select>
        </div>
        <div class="container">
          <vue-collapsible-panel-group>
            <vue-collapsible-panel
              v-for="scholarship in scholarships"
              :key="scholarship.id"
              :expanded="false"
            >
              <template #title>
                {{ scholarship.name }}
              </template>
              <template #content>
                <!-- {{ scholarship.constitutedBy }} -->
                <div class="gridContainer">
                  <div class="constitutedBy">
                    <div class="sectionTitle">Constituted By</div>
                    <div class="sectionContent">
                      {{ scholarship.constitutedBy }}
                    </div>
                  </div>
                  <div class="yearConstituted">
                    <div class="sectionTitle">Year Constituted</div>
                    <div class="sectionContent">
                      {{ scholarship.yearConstituted }}
                    </div>
                  </div>
                  <div class="amountPerScholarship">
                    <div class="sectionTitle">Amount Per Scholarship</div>
                    <div class="sectionContent">
                      {{ scholarship.amountPerScholarship }}
                    </div>
                  </div>
                  <div class="totalScholarshipDistributed">
                    <div class="sectionTitle">
                      Total Scholarship Distributed till Date
                    </div>
                    <div class="sectionContent">
                      <div class="flexRow">
                        <div>
                          <span class="sectionTitle" style="fontsize: 1em"
                            >In Numbers</span
                          >
                          <span class="sectionContent">{{
                            scholarship.totalScholarshipDistributedInNumbers
                          }}</span>
                        </div>
                        <div>
                          <span class="sectionTitle" style="fontsize: 1em"
                            >Amount</span
                          >
                          <span class="sectionContent">{{
                            scholarship.totalScholarshipDistributedInAmount
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="scholarshipTerms">
                    <div class="sectionTitle">Scholarship Terms</div>
                    <div class="sectionContent">
                      <li
                        v-for="term in scholarship.scholarshipTerms"
                        :key="term.id"
                      >
                        {{ term.desc }}
                      </li>
                    </div>
                  </div>
                </div>
                <div class="actionButtons">
                  <OrangeButton
                    displayText="View Benificiaries List"
                    type="outline"
                    :color="true"
                    class="orangeButtons"
                  />
                  <OrangeButton
                    displayText="Contribute to this program"
                    type="filled"
                    class="orangeButtons"
                  />
                </div>
              </template>
            </vue-collapsible-panel>
          </vue-collapsible-panel-group>
        </div>
      </div>
    </template>
  </PageSection>
  <PageSection>
    <template #heading>ONGOING CAMPAIGNS</template>
    <div>
      <ProjectTemplate />
    </div>
  </PageSection>
</template>

<script>
import Header from "../components/Reusable/Header";
import OpaquePageTitle from "../components/Reusable/OpaquePageTitle";
import PageSection from "../components/Reusable/PageSection";
import ProjectTemplate from "../components/Reusable/ProjectTemplate.vue";
// import vSelect from 'vue-select';
// import 'vue-select/dist/vue-select.css';
import "@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css";
import OrangeButton from "../components/Reusable/Buttons/OrangeButton";

export default {
  name: "AlumniGiving",
  components: {
    Header,
    OpaquePageTitle,
    PageSection,
    OrangeButton,
    ProjectTemplate,
    // vSelect
  },
  data() {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    return {
      scholarships: [
        {
          id: 1,
          name: "Scholarship 1",
          constitutedBy:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  At in nec sed eu. Adipiscing lectus gravida egestas rhoncus interdum. Enim, nisl bibendum in nulla gravida urna. Etiam consequat tristique dui magna id leo hac diam. Arcu bibendum arcu, pretium maecenas volutpat. Nullam maecenas posuere quam sit nunc, sed. Feugiat urna nullam amet non. Accumsan nulla malesuada varius et, etiam egestas vestibulum, elementum. Integer dolor, ullamcorper molestie id aliquam eget et.Amet commodo eleifend adipiscing arcu, mattis ut fames. Nullam sagittis, in est nisi nulla quis ut bibendum suspendisse. Purus urna massa in posuere neque aliquet gravida dapibus. Cras mattis interdum id amet, gravida. Gravida pharetra sollicitudin massa, aliquet nunc tellus diam.",
          yearConstituted: "2019",
          amountPerScholarship: "100% of Tution Fee",
          totalScholarshipDistributedInNumbers: "150",
          totalScholarshipDistributedInAmount: "6,50,00,00",
          scholarshipTerms: [
            {
              id: 1,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            },
            {
              id: 2,
              desc: "In fringilla interdum volutpat quis iaculis duis vitae parturient. Id pellentesque urna porta ultrices magna.",
            },
            {
              id: 3,
              desc: "Eros dui convallis sit massa habitant nam lacus, sed. Imperdiet sit et maecenas nunc, scelerisque viverra pretium. ",
            },
          ],
        },
        {
          id: 2,
          name: "Scholarship 2",
          constitutedBy:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in nec sed eu. Adipiscing lectus gravida egestas rhoncus interdum. Enim, nisl bibendum in nulla gravida urna. Etiam consequat tristique dui magna id leo hac diam. Arcu bibendum arcu, pretium maecenas volutpat. Nullam maecenas posuere quam sit nunc, sed. Feugiat urna nullam amet non. Accumsan nulla malesuada varius et, etiam egestas vestibulum, elementum. Integer dolor, ullamcorper molestie id aliquam eget et.Amet commodo eleifend adipiscing arcu, mattis ut fames. Nullam sagittis, in est nisi nulla quis ut bibendum suspendisse. Purus urna massa in posuere neque aliquet gravida dapibus. Cras mattis interdum id amet, gravida. Gravida pharetra sollicitudin massa, aliquet nunc tellus diam.",
          yearConstituted: "2019",
          amountPerScholarship: "100% of Tution Fee",
          totalScholarshipDistributedInNumbers: "150",
          totalScholarshipDistributedInAmount: "6,50,00,00",
          scholarshipTerms: [
            {
              id: 1,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            },
            {
              id: 2,
              desc: "In fringilla interdum volutpat quis iaculis duis vitae parturient. Id pellentesque urna porta ultrices magna.",
            },
            {
              id: 3,
              desc: "Eros dui convallis sit massa habitant nam lacus, sed. Imperdiet sit et maecenas nunc, scelerisque viverra pretium. ",
            },
          ],
        },
        {
          id: 3,
          name: "Scholarship 3",
          constitutedBy:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in nec sed eu. Adipiscing lectus gravida egestas rhoncus interdum. Enim, nisl bibendum in nulla gravida urna. Etiam consequat tristique dui magna id leo hac diam. Arcu bibendum arcu, pretium maecenas volutpat. Nullam maecenas posuere quam sit nunc, sed. Feugiat urna nullam amet non. Accumsan nulla malesuada varius et, etiam egestas vestibulum, elementum. Integer dolor, ullamcorper molestie id aliquam eget et.Amet commodo eleifend adipiscing arcu, mattis ut fames. Nullam sagittis, in est nisi nulla quis ut bibendum suspendisse. Purus urna massa in posuere neque aliquet gravida dapibus. Cras mattis interdum id amet, gravida. Gravida pharetra sollicitudin massa, aliquet nunc tellus diam.",
          yearConstituted: "2019",
          amountPerScholarship: "100% of Tution Fee",
          totalScholarshipDistributedInNumbers: "150",
          totalScholarshipDistributedInAmount: "6,50,00,00",
          scholarshipTerms: [
            {
              id: 1,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            },
            {
              id: 2,
              desc: "In fringilla interdum volutpat quis iaculis duis vitae parturient. Id pellentesque urna porta ultrices magna.",
            },
            {
              id: 3,
              desc: "Eros dui convallis sit massa habitant nam lacus, sed. Imperdiet sit et maecenas nunc, scelerisque viverra pretium. ",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.flexColumn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flexRow {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.flexRow > div:nth-child(2) {
  margin-left: 50px;
}

.filters {
  text-align: center;
  margin-bottom: 20px;
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

.container {
  width: 85vw;
}

.gridContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 40px 0px;
  grid-auto-flow: row;
  justify-content: start;
  align-content: start;
  justify-items: stretch;
  align-items: start;
  grid-template-areas:
    "constitutedBy constitutedBy constitutedBy"
    "yearConstituted amountPerScholarship totalScholarshipDistributed"
    "scholarshipTerms scholarshipTerms scholarshipTerms";
  width: 100%;
  margin-top: 10px;
}

.constitutedBy {
  grid-area: constitutedBy;
}

.yearConstituted {
  grid-area: yearConstituted;
}

.amountPerScholarship {
  grid-area: amountPerScholarship;
}

.totalScholarshipDistributed {
  grid-area: totalScholarshipDistributed;
}

.scholarshipTerms {
  grid-area: scholarshipTerms;
}

.sectionTitle {
  color: #08070a;
  font-family: "Baloo 2", sans-serif;
  font-size: 1.05em;
  text-align: left;
  font-weight: bold;
  margin-bottom: 5px;
}

.sectionTitle::after {
  content: ": ";
}

.sectionContent {
}

.actionButtons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 40px;
}

.actionButtons div {
  margin: 0 20px;
}

.orangeButtons {
  box-shadow: 0px 0px 4px 2px rgba(245, 117, 21, 0.25);
  border-width: 1px;
}
</style>
