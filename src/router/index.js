import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/:category/:id',
    name: 'Details',
    component: () => import(/* webpackChunkName: "details" */ '../views/ItemDetails.vue'),
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
