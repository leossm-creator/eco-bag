<template>
  <v-container>
    <h1 class="headline">Progress</h1>
    <v-row class="d-flex justify-center">
      <RingViewer class="progressRing" />
    </v-row>
    <v-card class="pa-2 d-flex" height="120" rounded="lg">
      <v-row>
        <v-col>
          <div class="dataElem">
            <p>You have reached {{}} times in this week</p>
          </div>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <div class="dataElem">
            <p>You have reached {{}} times in this week</p>
          </div>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <div class="dataElem">
            <p>You have reached {{}} times in this week</p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import RingViewer from "../components/RingViewer.vue";
export default {
  name: "ProgressView",
  components: {
    RingViewer,
  },
  data: function () {
    return {
      useTime: {
        weekly: 20,
        monthly: 40,
      },
      rings: {
        
      }
    };
  },
};
</script>
<style lang="scss" scoped>
// .progressRing {
//   width: 100px;
//   height: 100px;
// }
</style>