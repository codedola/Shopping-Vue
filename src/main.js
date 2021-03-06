import Vue from "vue";
import App from "./App.vue";

import Store from "./store";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
})
  .use(Store)
  .$mount("#app");
