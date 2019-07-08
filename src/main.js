import Vue from "vue";
import App from "./App.vue";
import router from "./routers/router";
import store from "./store";
import locale from "element-ui/lib/locale/lang/en";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import moment from "vue-moment";

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });
Vue.use(moment, { locale });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
