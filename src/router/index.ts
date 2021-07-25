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
  // {
  //   path: '/',
  //   name: 'HelloWorld',
  //   meta: {title: 'Hello World'},
  //   component: () => import('@/components/HelloWorld.vue')
  // },
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
  } 
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
