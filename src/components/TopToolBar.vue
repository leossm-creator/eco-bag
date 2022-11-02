<template>
  <div>
    <v-app-bar app color="white" elevation="0">
      <div class="d-flex align-center">
        <v-img
          alt="Petto Logo"
          class="shrink mr-2"
          contain
          src="/Petto_logo.png"
          transition="scale-transition"
          width="75"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn text @click="animate">
        <span class="mr-2 points font-weight-medium">{{points}}</span>
        <v-icon color="#EBD04D">mdi-alpha-p-circle</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: "TopToolBar",

  components: {},

  data: () => ({
    open: false,
    notifications: null,
    sound: null,
    widgets: null,

    points: 320,
    count: 0,
  }),
  computed: {},
  methods: {
    animate() {

    },
  }
};
</script>
<style scoped>
.points {
  color: #058240;
}
</style>