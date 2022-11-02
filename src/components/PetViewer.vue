<template>
  <div ref="viewer" id="viewer"></div>
</template>

<script>
import * as THREE from "three";
import { Lion } from "../utility/petviz";

export default {
  name: "PetViewer",

  data: function () {
    return {
      scene: null,
      camera: null,
      controls: null,
      fieldOfView: null,
      aspectRatio: null,
      nearPlane: null,
      farPlane: null,
      shadowLight: null,
      backLight: null,
      light: null,
      renderer: null,
      container: null,
      floor: null,
      lion: null,
      fan: null,
      isBlowing: false,
      HEIGHT: null,
      WIDTH: null,
      windowHalfX: null,
      windowHalfY: null,
      mousePos: { x: 0, y: 0 },
      dist: 0,
    };
  },

  methods: {
    init() {
      let self = this;
      this.scene = new THREE.Scene();
      this.HEIGHT = this.$refs.viewer.offsetHeight;
      this.WIDTH = this.$refs.viewer.offsetWidth;
      this.aspectRatio = this.WIDTH / this.HEIGHT;
      this.fieldOfView = 60;
      this.nearPlane = 1;
      this.farPlane = 2000;
      this.camera = new THREE.PerspectiveCamera(
        self.fieldOfView,
        self.aspectRatio,
        self.nearPlane,
        self.farPlane
      );
      // this.camera.position.x = 0;
      this.camera.position.z = 800;
      this.camera.position.y = 0;
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
      this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(this.WIDTH, this.HEIGHT);
      this.renderer.shadowMapEnabled = true;
      this.container = this.$refs.viewer;
      this.container.appendChild(this.renderer.domElement);
      this.windowHalfX = this.WIDTH / 2;
      this.windowHalfY = this.HEIGHT / 2;

      window.addEventListener("resize", self.onWindowResize, false);
      document.addEventListener("mousemove", self.handleMouseMove, false);
      document.addEventListener("mousedown", self.handleMouseDown, false);
      document.addEventListener("mouseup", self.handleMouseUp, false);
      document.addEventListener("touchstart", self.handleTouchStart, false);
      document.addEventListener("touchend", self.handleTouchEnd, false);
      document.addEventListener("touchmove", self.handleTouchMove, false);
      /*
  self.controls = new THREE.OrbitControls( self.camera, self.renderer.domElement);
  //*/
    },

    onWindowResize() {
      let self = this;
      self.HEIGHT = this.$refs.viewer.offsetHeight;
      self.WIDTH = this.$refs.viewer.offsetWidth;
      self.windowHalfX = self.WIDTH / 2;
      self.windowHalfY = self.HEIGHT / 2;
      self.renderer.setSize(self.WIDTH, self.HEIGHT);
      self.camera.aspect = self.WIDTH / self.HEIGHT;
      self.camera.updateProjectionMatrix();
    },

    handleMouseMove(event) {
      this.mousePos = { x: event.clientX, y: event.clientY };
    },

    handleMouseDown() {
      this.isBlowing = true;
    },

    handleMouseUp() {
      this.isBlowing = false;
    },

    handleTouchStart(event) {
      let self = this;
      if (event.touches.length > 1) {
        // event.preventDefault();
        self.mousePos = {
          x: event.touches[0].pageX,
          y: event.touches[0].pageY,
        };
        self.isBlowing = true;
      }
    },

    handleTouchEnd() {
      //self.mousePos = {x:self.windowHalfX, y:self.windowHalfY};
      this.isBlowing = false;
    },

    handleTouchMove(event) {
      let self = this;
      if (event.touches.length == 1) {
        // event.preventDefault();
        self.mousePos = {
          x: event.touches[0].pageX,
          y: event.touches[0].pageY,
        };
        self.isBlowing = true;
      }
    },

    createLights() {
      this.light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);

      this.shadowLight = new THREE.DirectionalLight(0xffffff, 0.8);
      this.shadowLight.position.set(200, 200, 200);
      this.shadowLight.castShadow = true;
      this.shadowLight.shadowDarkness = 0.2;

      this.backLight = new THREE.DirectionalLight(0xffffff, 0.4);
      this.backLight.position.set(-100, 200, 50);
      this.backLight.shadowDarkness = 0.1;
      this.backLight.castShadow = true;

      this.scene.add(this.backLight);
      this.scene.add(this.light);
      this.scene.add(this.shadowLight);
    },

    createFloor() {
      // this.floor = new THREE.Mesh(
      //   new THREE.PlaneGeometry(1000, 500),
      //   new THREE.MeshBasicMaterial({ color: "rgba(255,255,255,0)" })
      // );
      // this.floor.rotation.x = -Math.PI / 2;
      // this.floor.position.y = -100;
      // this.floor.receiveShadow = true;
      // this.scene.add(this.floor);
    },

    createLion() {
      this.lion = new Lion();
      this.scene.add(this.lion.threegroup);
    },

    createFan() {
      // this.fan = new Fan();
      // this.fan.threegroup.position.z = 350;
      // this.scene.add(this.fan.threegroup);
    },

    loop() {
      this.render();
      var xTarget = this.mousePos.x - this.windowHalfX;
      var yTarget = this.mousePos.y - this.windowHalfY;

      // this.fan.isBlowing = this.isBlowing;
      // this.fan.update(xTarget, yTarget);
      if (this.isBlowing) {
        // console.log(xTarget, yTarget);
        this.lion.cool(xTarget, yTarget);
      } else {
        this.lion.look(xTarget, yTarget);
      }
      requestAnimationFrame(this.loop);
    },

    render() {
      if (this.controls) this.controls.update();
      this.renderer.render(this.scene, this.camera);
    },
    clamp(v, min, max) {
      return Math.min(Math.max(v, min), max);
    },

    rule3(v, vmin, vmax, tmin, tmax) {
      var nv = Math.max(Math.min(v, vmax), vmin);
      var dv = vmax - vmin;
      var pc = (nv - vmin) / dv;
      var dt = tmax - tmin;
      var tv = tmin + pc * dt;
      return tv;
    },
    animate() {
      this.render();
      this.isBlowing = true;
      this.lion.cool(130, -70);
      requestAnimationFrame(this.animate);
    },
  },
  mounted() {
    this.init();
    this.createLights();
    this.createFloor();
    this.createLion();
    // this.createFan();
    this.loop();
  },
};
</script>

<style lang="scss" scoped>
#viewer {
  background: rgba(255, 255, 255, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 900;
}
</style>