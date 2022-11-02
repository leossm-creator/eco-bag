<template>
  <div>
    <v-bottom-navigation
      id="bottomNav"
      class="bottomNav"
      :value="active"
      color="white"
      light
      grow
    >
      <v-btn
        height="100%"
        value="home"
        :to="{ path: '/' }"
        class="bottomNavLinks"
      >
        <span>Home</span>

        <v-icon>mdi-home-variant</v-icon>
      </v-btn>

      <v-btn
        height="100%"
        value="reward"
        :to="{ name: 'reward' }"
        class="bottomNavLinks"
      >
        <span>Rewards</span>

        <v-icon>mdi-medal</v-icon>
      </v-btn>

      <v-btn height="100%" value="progress" :to="{ name: 'progress' }">
        <span>Progress</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn height="100%" value="settings" :to="{ name: 'settings' }">
        <span>Settings</span>

        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "BottomNav",

  components: {},

  data: () => ({
    active: "home",
  }),
  computed: {},
};
</script>
<style lang="scss" scoped>
.bottomNav {
  border-radius: 25px 25px 0 0;
  height: 56px;
  // position: absolute;
  // bottom: 0;
  // color: "white";
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(83, 242, 155, 0.7987570028011204) 0%,
    rgba(44, 215, 121, 1) 100%
  );
}

.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {
  color: rgba(73, 73, 73, 0.6) !important;
}
</style>