<template>
  <v-app id="screen">
    <TopToolBar></TopToolBar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <BottomNav></BottomNav>
  </v-app>
</template>

<script>
import TopToolBar from "./components/TopToolBar.vue";
import BottomNav from "./components/BottomNav.vue";

export default {
  name: "App",

  components: {
    TopToolBar,
    BottomNav,
  },

  data: () => ({

  }),
};
</script>

<style scoped>
  #screen {
    height: 100%;
    max-height: 100%;
  }
</style>