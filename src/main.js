import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'
import "../node_modules/vue-select/dist/vue-select.css"
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
import VWave from 'v-wave';
import { vfmPlugin } from "vue-final-modal";

createApp(App)
  .use(router)
  .use(VueCollapsiblePanel)
  .use(VCalendar, {})
  .use(VWave)
  .use(vfmPlugin, {
    key: "$vfm",
    componentName: "VueFinalModal",
    dynamicContainerName: "ModalsContainer"
  })
  .mount("#app");
 