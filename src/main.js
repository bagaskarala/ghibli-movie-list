import {
  BootstrapVueIcons,
  NavbarPlugin,
  LayoutPlugin,
  FormInputPlugin,
  FormSelectPlugin,
  CardPlugin,
  ButtonPlugin,
  SpinnerPlugin,
  ListGroupPlugin,
  BadgePlugin,
  AlertPlugin,
  InputGroupPlugin,
} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './services/api';

const plugins = [
  BootstrapVueIcons,
  NavbarPlugin,
  LayoutPlugin,
  FormInputPlugin,
  FormSelectPlugin,
  CardPlugin,
  ButtonPlugin,
  SpinnerPlugin,
  ListGroupPlugin,
  BadgePlugin,
  AlertPlugin,
  InputGroupPlugin,
];
plugins.forEach((x) => Vue.use(x));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
