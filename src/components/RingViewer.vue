<template>
  <div class="ring">
    <div ref="ringData" id="ringData"></div>
    <!-- <div class="useTimeContainer"> -->
    <div class="useTime" hidden>
      <div class="useTime_current">
        {{ useTime.current }}
      </div>
      <div class="breakEvenPoint">/{{ breakEvenPoint }}</div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
// import * as ProgressBar from "progressbar.js";
import CircleProgress from "js-circle-progress";

export default {
  name: "RingViewer",

  components: {},

  data: function () {
    return {
      breakEvenPoint: 14,
      useTime: {
        current: 12,
        weekly: 20,
        monthly: 40,
      },

      ring: null,
      ringData: 0,
      width: 0,
      height: 0,
      current: "green",
      gradientColours: {
        green: `
  <defs>
    <linearGradient id="gradientGreen" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
      <stop offset="5%" stop-color="#35E2CB" stop-opacity="1"/>
      <stop offset="95%" stop-color="#55FF55" stop-opacity="0.75"/>
    </linearGradient>
  </defs>
`,
      },
    };
  },
  computed: {
    currentColElem() {
      switch (this.current) {
        case "green":
          return this.gradientColours.green;

        default:
          return null;
      }
    },
    currentCol() {
      switch (this.current) {
        case "green":
          return "gradientGreen";

        default:
          return null;
      }
    },
  },
  methods: {
    animate() {
      this.ring.animate(
        0.9,
        {
          duration: 1600,
        },
        function () {
          console.log("Animation has finished");
        }
      );
    },
    resizeViewer() {
      this.width = screen.width * 0.75;
      this.height = screen.height * 0.75;
      if (this.width > this.height) {
        this.$refs.ringData.style.width = this.height + "px";
        this.$refs.ringData.style.height = this.height + "px";
      } else {
        this.$refs.ringData.style.width = this.width + "px";
        this.$refs.ringData.style.height = this.width + "px";
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.resizeViewer());
    window.addEventListener("orientationchange", this.resizeViewer());
    this.resizeViewer();

    // this.ring = new ProgressBar.Circle("#ringData", {
    //   strokeWidth: 11,
    //   easing: "easeInOut",
    //   color: "url(#gradientGreen)",
    //   trailColor: "rgba(0,0,0,0.03)",
    //   trailWidth: 10,
    //   svgStyle: {
    //     strokeLinecap: "round",
    //   },
    // });

    // this.ring.svg.insertAdjacentHTML("afterBegin", this.currentColElem);
    // this.animate();

    this.ring = new CircleProgress("#ringData", {
      value: this.useTime.current,
      max: this.breakEvenPoint,
      animation: "easeInOutCubic",
      animationDuration: 1200,
    });
  },
};
</script>
<style lang="scss">
.ring {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  #ringData {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    // z-index: 10;
  }

  .useTimeContainer {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .useTime {
    position: absolute;
    z-index: 50;

    .useTime_current {
      font-size: 4em;
      font-weight: 600;
      color: #058240;
      text-align: left;
    }

    .breakEvenPoint {
      font-size: 2em;
      color: #bdbdbd;
      text-align: right;
    }
  }
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
  font-size: 2em !important;
  font-weight: 600 !important;
  fill: #058240 !important;
  text-align: left !important;
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
</style>