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
  data: () => ({}),
  methods: {
    setHeight() {
      let doc = document.documentElement;
      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
      window.addEventListener("resize", this.setHeight());
    },
  },
  created() {},
};
</script>

<style>
:root {
  --doc-height: 100%;
}
html,
body {
 padding: 0;
 margin: 0;
 height: 100vh; /* fallback for Js load */
 height: var(--doc-height);
}

#app {
  height: var(--doc-height);
  width: 100vw;
  overflow-y: hidden;
  /* max-height: calc(100vh - 56px);
    overflow-y: hidden; */
}

#main {
  height: calc(var(--doc-height) - 164px);
  max-height: calc(var(--doc-height) - 164px);
  overflow-y: scroll;
}

-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
</style>