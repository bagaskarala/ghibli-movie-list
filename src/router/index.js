import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/:category/:id',
    name: 'Details',
    component: () => import(/* webpackChunkName: "details" */ '../views/ItemDetails.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
