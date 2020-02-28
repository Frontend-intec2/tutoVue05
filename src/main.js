import Vue from "vue";
import App from "./App.vue";
// import ninjas from "./Ninjas1.vue";

// Vue.component("ninjas".Ninjas1);

//Vue.component("ninjas".Ninjas1);
// line 5 globally registered component

new Vue({
  el: "#app",
  render: h => h(App)
});
