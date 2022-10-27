<template>
  <div ref="viewer" id="viewer"></div>
</template>

<script>
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

export default {
  name: "ModelViewer",
  data: function () {
    return {
      container: null,
      scene: null,
      camera: null,
      renderer: null,
      mtl_loader: null,
      obj_loader: null,
      model: null,
      controls: null,
    };
  },
  methods: {
    init() {
      let self = this;
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("#ffffff");
      this.camera = new THREE.PerspectiveCamera(
        15,
        this.$refs.viewer.offsetWidth / this.$refs.viewer.offsetHeight,
        1,
        2000
      );
      this.camera.position.z = 0;

      var ambientLight = new THREE.AmbientLight(0xcccccc);
      this.scene.add(ambientLight);

      var pointLight = new THREE.PointLight(0xffffff, 0.8, 100);
      pointLight.position.set(1,1,2);
      this.camera.add(pointLight);
      this.scene.add(this.camera);

      this.renderer = new THREE.WebGLRenderer();

      this.renderer.setSize(this.$refs.viewer.offsetWidth, this.$refs.viewer.offsetHeight);

      this.container = this.$refs.viewer;

      this.container.appendChild(this.renderer.domElement);


      this.obj_loader = new OBJLoader();
      this.obj_loader.load(
        "./models/panda_final.obj",

        // onLoad callback
        // Here the loaded data is assumed to be an object
        function (obj) {
          // Add the loaded object to the scene
          // self.scene.add(obj);
          obj.traverse(function(child) {
                if (child instanceof THREE.Mesh) {
                    child.material.color = 0xffb830;
                }
            });
            obj.position.set(0, 0, -53);
            self.scene.add(obj);
            self.renderer.render(self.scene, self.camera)
        },

        // onProgress callback
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },

        // onError callback
        function (err) {
          console.error("An error happened", err);
        }
      );

      this.controls = new OrbitControls( self.camera, self.renderer.domElement );
      this.controls.update();

      this.mtl_loader = new MTLLoader();
    },
    animate() {
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
    //window.addEventListener("mousedown", this.onMouseDown, false);
  },
};
</script>

<style lang="scss" scoped>
#world {
  background: #ebe5e7;
  position:absolute;
  width:100%;
  height:100%;
  overflow:hidden;
}
</style>