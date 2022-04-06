import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Impressum from '../views/Impressum.vue';
import Access from '../views/Access.vue';
import Help from '../views/Help.vue';
import Auktionen from '../views/Auktionen.vue';
import Produkte from '../views/Produkte.vue';
import CardView from '../views/CardView.vue';
import About from '../views/About.vue';
import Profile from '../views/Profile.vue';
import Offers from '../views/Offers.vue';
import Admin from '../views/Admin.vue';

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
    path: '/offers',
    name: 'Angebote',
    component: Offers,
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
