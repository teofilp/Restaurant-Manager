<template>
  <div class="wrapper">
    <div class="info">
      <h4 class="mb-2">Net Earning</h4>
      <h5 class="mb-2">
        <span>7534</span>/11590
      </h5>
      <i class="fas fa-chart-line"></i>
    </div>
    <div class="bordered">
      <radialProgressBar :value="value"></radialProgressBar>
    </div>
  </div>
</template>
<script>
import RadialProgressBar from "../../assets/RadialProgressBar";
export default {
  props: ["value"],
  components: {
    RadialProgressBar
  }
};
</script>
<style scoped>
.wrapper {
  height: calc(175px - 0.5rem);
  padding: 1.5rem;
  background: white;
  float: left;
  margin-left: 1rem;
  margin-bottom: 1rem;
  box-shadow: 2px 2px 10px #ccc;
}
.info {
  height: 100%;
  float: left;
  margin-right: 0.75rem;
}

.info i {
  font-size: 4rem;
  margin-left: 0.5rem;
  color: rgba(130, 114, 247, 0.3);
}

.info h5 span {
  color: rgba(130, 114, 247, 0.7);
}

.bordered {
  width: calc(200px - 4.5rem);
  height: calc(200px - 4.5rem);
  padding: 0.5rem;
  border-radius: 50%;
  border: 3px solid rgba(130, 114, 247, 0.7);
  float: left;
}
</style>


