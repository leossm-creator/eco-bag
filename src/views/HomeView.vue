<template>
  <div>
    <PetViewer />
    <div class="home_overlap">
      <div class="ringContainer">
        <RingViewer class="ring"></RingViewer>
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
    points: 13,
  }),
};
</script>
<style lang="scss" scoped>
// #viewer {
//   height: auto;
// }
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

.ring {
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


</style>