<template>
    <div>
      <ModelViewer />
    </div>
</template>
<script>
import ModelViewer from "../components/ModelViewer.vue"

export default {
  name: "HomeView",
  components: {
    ModelViewer,
  },
  data: () => ({
  }),
};
</script>
<style lang="scss" scoped>
// #viewer {
//   height: auto;
// }
</style>