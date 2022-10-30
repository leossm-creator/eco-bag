import Vue from 'vue'
import VueRouter from 'vue-router'

import ProgressView from '../views/ProgressView.vue';
import SettingsView from '../views/SettingsView.vue';
import RewardView from '../views/RewardView.vue';
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  {
    path: '/rewards',
    name: 'reward',
    component: RewardView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
