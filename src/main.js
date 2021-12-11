import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'
import "../node_modules/vue-select/dist/vue-select.css"

createApp(App)
  .use(router)
  .use(VueCollapsiblePanel)
  .mount("#app");
 