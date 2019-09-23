<template>
  <div class="wrapper">
    <div class="info">
      <h5 class="mb-3">{{title}}</h5>
      <h6 class="mb-3">
        <span>{{value}}</span>
        /{{total}}
      </h6>
      <i class="fas fa-chart-line" :class="icon"></i>
    </div>
    <div class="bordered">
      <radial-progress-bar
        style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%)"
        innerStrokeColor="rgba(130, 114, 247, 0.3)"
        startColor="#8272f7"
        stopColor="rgba(130, 114, 247, 0.5)"
        :animateSpeed="1000"
        :diameter="100"
        :completed-steps="value"
        :total-steps="total"
      >
        <p
          class="mt-3"
          style="font-size: 1.5rem; font-weight: 700; color: rgba(130, 114, 247, 1)"
        >{{Math.floor(value / total * 100)}}%</p>
      </radial-progress-bar>
    </div>
  </div>
</template>
<script>
import RadialProgressBar from "vue-radial-progress";
export default {
  props: ["title", "icon", "value", "total"],
  components: {
    RadialProgressBar
  }
};
</script>
<style scoped>
.wrapper {
  height: calc(175px - 0.5rem);
  width: calc(50% - 0.5rem);
  padding: 1rem;
  background: white;
  float: left;
  box-shadow: 2px 2px 10px #ccc;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
}

.wrapper:hover {
  transform: scale(1.05);
  border-color: #8272f7;
  z-index: 100;
  cursor: pointer;
}
.info {
  height: 100%;
  float: left;
  margin-right: 0.75rem;
}

.info i {
  font-size: 4rem;
  margin-left: 0.5rem;
  color: rgba(130, 114, 247, 1);
}

.info h6 span {
  color: rgba(130, 114, 247, 0.7);
}

.bordered {
  position: relative;
  width: calc(175px - 4rem);
  height: calc(175px - 4rem);
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 50%;
  border: 3px solid #eee;
  float: left;
}
</style>


