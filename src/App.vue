<template>
  <v-app id="app">
    <TopToolBar></TopToolBar>

    <v-main id="main">
      <router-view />
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
  #app {
    height: 100vh;
    width: 100vw;
    overflow-y: hidden;
    /* max-height: calc(100vh - 56px);
    overflow-y: hidden; */
  }

  #main {
    height: calc(100vh - 56px);
    max-height: calc(100vh - 56px);
    overflow-y: scroll;
  }
</style>