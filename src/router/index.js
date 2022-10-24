import Vue from 'vue'
import VueRouter from 'vue-router'

import ProgressView from '../views/ProgressView.vue';
import SettingsView from '../views/SettingsView.vue';
import WalletView from '../views/WalletView.vue';
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: WalletView
  },
  {
    path: '/progress',
    name: 'progress',
    component: ProgressView
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  },
  // {
  //   path: '/my-wallet',
  //   name: 'my-wallet',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/MyWallet.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
