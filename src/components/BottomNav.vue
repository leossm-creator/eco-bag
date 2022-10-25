<template>
  <div>
    <v-bottom-navigation
      class="bottomNav"
      :value="active"
      color="white"
      background-color="#2CB56A"
      light
      grow
    >
      <v-btn height="100%" value="wallet" :to="{ name: 'wallet' }">
        <span>Wallet</span>

        <v-icon>mdi-medal</v-icon>
      </v-btn>

      <v-btn height="100%" value="home" :to="{ path: '/'}">
        <span>Home</span>

        <v-icon>mdi-home-variant</v-icon>
      </v-btn>

      <v-btn height="100%" value="progress" :to="{ name: 'progress' }">
        <span>Progress</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "BottomNav",

  components: {
  },

  data: () => ({
    active: "home"
  }),
  computed: {
  },
};
</script>
<style lang="scss" scoped>
.bottomNav {
  border-radius: 25px 25px 0 0;
  height: 56px;
  position: absolute;
  bottom: 0;
  // color: "white";
  // background: linear-gradient("#53F29B", "#2CB56A") !important;
}
</style>