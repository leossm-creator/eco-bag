<template>
  <v-container class="py-6">
    <v-row class="px-3">
      <p class="text-h6">Progress</p>
    </v-row>
    <v-row class="d-flex justify-center my-3">
      <RingViewer class="progressRing" />
    </v-row>
    <v-row class="py-3">
      <v-card class="mx-3 d-flex" min-height="120" rounded="lg">
        <v-col>
          <div class="dataElem">
            You have reached
            <span class="dataNum font-weight-medium">{{ useTime.weekly }}</span>
            times in this week
          </div>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <div class="dataElem">
            You have reached
            <span class="dataNum font-weight-medium">{{
              useTime.monthly
            }}</span>
            times in this week
          </div>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <div class="dataElem">
            You have reached
            <span class="dataNum font-weight-medium">{{ ring.weekly }}</span>
            rings in this week
          </div>
        </v-col>
      </v-card>
    </v-row>
    <v-row class="px-3">
      <p class="text-h6">Your Impact</p>
    </v-row>
    <v-row class="pa-3 info_container">
      <v-sheet
        elevation="1"
        height="100"
        width="100"
        rounded=""
        class="info_cards"
      >
        <div class="infoElem">
          You have saved
          <span class="dataNum font-weight-medium">5</span>
          kilograms of plastic bag
          <v-icon color="green">mdi-bin</v-icon>
        </div>
      </v-sheet>
      <v-sheet
        elevation="1"
        height="100"
        width="100"
        rounded=""
        class="info_cards"
        style="margin-left: 15px"
      >
        <div class="infoElem">
          You have saved
          <span class="dataNum font-weight-medium">60</span>
          liters of petroleum
          <v-icon color="green">mdi-bin</v-icon>
        </div>
      </v-sheet>
      <v-sheet
        elevation="1"
        height="100"
        width="100"
        rounded=""
        class="info_cards"
        style="margin-left: 15px"
      >
        <div class="infoElem">
          You have created
          <span class="dataNum font-weight-medium">2%</span>
          more positive impact
          <v-icon color="green">mdi-bin</v-icon>
        </div>
      </v-sheet>
      <v-sheet
        elevation="1"
        height="100"
        width="100"
        rounded=""
        class="info_cards"
        style="margin-left: 15px"
      >
        <div class="infoElem">
          You have saved
          <span class="dataNum font-weight-medium">5</span>
          kilograms of plastic bag
          <v-icon color="green">mdi-bin</v-icon>
        </div>
      </v-sheet>
    </v-row>
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
      breakEvenPoint: 14,
      useTime: {
        current: 12,
        weekly: 20,
        monthly: 40,
      },
      ring: {
        weekly: 2,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.dataNum {
  color: #1b5e20;
  font-size: large;
}

.info_cards {
  flex: 0 0 auto;
  // margin: 0 10px;
  background: linear-gradient(
    45deg,
    rgba(4, 144, 70, 0.32),
    rgba(213, 252, 253, 0.41)
  );
}

.info_container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  max-width: 100%;
}

.infoElem {
  padding: 10px;
  font-size: 0.75em;
}
</style>