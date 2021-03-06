import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [

  {
    path: "*",
    component: () => import('@/components/HelloWorld.vue')
  },

  {
    path: '/home',
    name: 'Home',
    meta: {title: 'Home'},
    component: () => import('@/components/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {title: 'About'},
    component: () => import('@/components/About.vue')
  } ,
  {
    path: '/:link',
    name: 'Give',
    meta: {title: 'Giving Hero'},
    component: () => import('@/components/Give.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
