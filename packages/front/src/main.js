import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';

Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.VUE_APP_ENDPOINT || 'http://localhost:5000';
Vue.prototype.$http = axios;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
