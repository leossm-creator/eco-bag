<template>
    <div>
      <PetViewer />
    </div>
</template>
<script>
import PetViewer from "../components/PetViewer.vue"

export default {
  name: "HomeView",
  components: {
    PetViewer,
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