<template>
  <div>
    <PetViewer />
    <div class="home_overlap">
      <div class="ringContainer">
        <RingViewer class="ringring"></RingViewer>
        <v-card class="streaks floatingCards blur" width="125" height="125" hover>
          <p class="text-h8 text--disabled font-weight-light">Streaks</p>
          <p class="text-h3 text--primary font-weight-light text-right numData">{{streaks}}</p>
        </v-card>
        <v-card class="points floatingCards blur" width="125" height="125" hover> 
          <p class="text-subtitle-1 text--disabled font-weight-light">Points</p>
          <p class="text-h3 text--primary font-weight-light text-right numData">{{points}}</p>
        </v-card>
      </div>
    </div>
    <div class="ringCover">

    </div>
  </div>
</template>
<script>
import PetViewer from "../components/PetViewer.vue";
import RingViewer from "../components/RingViewer.vue";

export default {
  name: "HomeView",
  components: {
    PetViewer,
    RingViewer,
  },
  data: () => ({
    progress: 75,
    streaks: 55,
    points: 12,
  }),
};
</script>
<style lang="scss" scoped>
.home_overlap {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
}

.ringContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.floatingCards {
  padding: 15px;
  position: absolute;
  border-radius: 30px !important;
  background-color:rgba(200, 236, 199, 0.15);
  z-index: 30;


  &.points {
    left: 7.5%;
    top: 7.5%;
  }

  &.streaks {
    right: 5%;
    bottom: 5%;
  }

  .numData {
    color: #058240 !important;
  }
}

.blur {
  backdrop-filter: blur(6px);
}

.circle-progress {
  width: 250px !important;
  height: 250px !important;
}

.circle-progress-value {
  // fill: url(#gradientGreen);
  stroke: #058240;
}

.circle-progress-text-value {

}
.circle-progress-text-separator {
  font-size: 1em !important;
  fill: #bdbdbd !important;
  text-align: right !important;
}
.circle-progress-text-max {
  font-size: 1em !important;
  fill: #bdbdbd !important;
  text-align: right !important;
}

.ringCover {
  width: 155px;
  height: 100px;
  background-color: white;
  position: absolute;
  top: 200px;
  z-index: 300;
  left: 110px;
}


</style>