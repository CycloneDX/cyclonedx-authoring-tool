// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import i18n from './i18n'
import VueToastr from "vue-toastr";
import './validation'
import './plugins/table.js'
import version from "./version";

Vue.use(BootstrapVue);
Vue.use(VueToastr, {
  defaultTimeout: 5000,
  defaultProgressBar: false,
  defaultProgressBarValue: 0,
  defaultPosition: "toast-top-right",
  defaultCloseOnHover: false
});

Vue.prototype.$version = version;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  }
  ,i18n
});
