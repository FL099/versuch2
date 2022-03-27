import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum,
  },
  {
    path: '/access',
    name: 'Access',
    component: Access,
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
  },
  {
    path: '/auktionen',
    name: 'Auktionen',
    component: Auktionen,
  },
  {
    path: '/produkte',
    name: 'Produkte',
    component: Produkte,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/items/:itemNo',
    name: 'items',
    component: CardView,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
