<template>
  <div ref="ringData" id="ringData"></div>
</template>

<script>
import * as ProgressBar from "progressbar.js";

export default {
  name: "RingViewer",

  components: {},

  data: function () {
    return {
      ring: null,
      ringData: 0,
      width: 200,
      height: 200,
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
    this.ring = new ProgressBar.Circle("#ringData", {
      strokeWidth: 11,
      easing: "easeInOut",
      color: "url(#gradientGreen)",
      // trailColor: "#35E2CB",
      // trailWidth: 3,
      svgStyle: {
        strokeLinecap: "round",
      },
    });

    this.ring.svg.insertAdjacentHTML("afterBegin", this.currentColElem);
    this.animate();
  },
};
</script>
<style lang="scss" scoped>
#ringData {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
</style>