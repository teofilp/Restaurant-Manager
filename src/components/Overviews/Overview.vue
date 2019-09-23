<template>
  <div id="overview_wrapper">
    <div class="earning_wrapper">
      <h2 class="mb-4 earning_graph_label">Earnings</h2>
      <earning-graph></earning-graph>
    </div>
    <div class="widgets_wrapper">
      <RadialWidget title="Net Earning" icon="fa-chart-line" :value="7534" :total="11590"></RadialWidget>
      <OrdersReceived></OrdersReceived>
      <RatingWidget></RatingWidget>
      <RadialWidget
        title="Satisfaction"
        icon="fa-smile"
        :value="98"
        :total="105"
        :style="{'margin-left': '1rem', 'margin-top' : '1rem'}"
      ></RadialWidget>
    </div>
  </div>
</template>

<script>
import EarningGraph from "./EarningGraph";
import RadialWidget from "./RadialWidget";
import OrdersReceived from "./OrdersReceived";
import RatingWidget from "./RatingWidget";
export default {
  data() {
    return {};
  },
  components: {
    EarningGraph,
    RadialWidget,
    OrdersReceived,
    RatingWidget
  },
  async mounted() {
    await setTimeout(() => {}, 50);
    document.querySelector("#line-chart").style.height =
      document.querySelector(".earning_wrapper").offsetHeight -
      document.querySelector(".earning_graph_label").offsetHeight -
      50 +
      "px";
  }
};
</script>

<style scoped>
#overview_wrapper {
  width: 100%;
  height: 350px;
  padding: 0 1rem;
  margin-top: 1rem;
  position: relative;
}

h2 {
  font-weight: bolder;
  color: black;
  font-size: 1.25rem;
}

.earning_wrapper {
  background: white;
  position: relative;
  width: calc(50% - 0.5rem);
  height: 100%;
  padding: 1rem;
  float: left;
  box-shadow: 2px 2px 10px #ccc;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
}

.earning_wrapper:hover {
  transform: scale(1.02);
  border-color: #8272f7;
}
.widgets_wrapper {
  position: relative;
  float: left;
  height: 350px;
  width: calc(50% + 0.5rem);
  padding: 0 0 0 1rem;
  user-select: none;
}
</style>


