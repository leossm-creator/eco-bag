<template>
  <div>
    <v-bottom-navigation
      :value="active"
      color="teal"
      grow
    >
      <v-btn height="100%" value="wallet" :to="{ name: 'my-wallet' }">
        <span>Wallet</span>

        <v-icon>mdi-wallet-outline</v-icon>
      </v-btn>

      <v-btn height="100%" value="home" :to="{ path: '/'}">
        <span>Home</span>

        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn height="100%" value="progress" :to="{ path: '/my-progress' }">
        <span>Progress</span>

        <v-icon>mdi-progress-clock</v-icon>
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