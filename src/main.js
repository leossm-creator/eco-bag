import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Router from "vue-router"

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(Router);

import MyProgress from './views/MyProgress.vue';
import MySettings from './views/MySettings.vue';
import MyWallet from './views/MyWallet.vue';
import MyMain from "./views/MyMain.vue"

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'app-main',
      component: MyMain
    },
    {
      path: '/my-wallet',
      name: 'my-wallet',
      component: MyWallet
    },
    {
      path: '/my-progress',
      name: 'my-progress',
      component: MyProgress
    },
    {
      path: '/settings',
      name: 'settings',
      component: MySettings
    },
  ]
});

