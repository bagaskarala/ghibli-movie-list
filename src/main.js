import {
  NavbarPlugin, LayoutPlugin, FormInputPlugin, CardPlugin, ButtonPlugin, SpinnerPlugin, BootstrapVueIcons, ListGroupPlugin, BadgePlugin, AlertPlugin,
} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './services/api';

const plugins = [NavbarPlugin, LayoutPlugin, FormInputPlugin, CardPlugin, ButtonPlugin, SpinnerPlugin, BootstrapVueIcons, ListGroupPlugin, BadgePlugin, AlertPlugin];
plugins.forEach((x) => Vue.use(x));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
