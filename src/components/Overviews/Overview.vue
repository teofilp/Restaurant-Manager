<template>
  <div id="overview_wrapper">
    <div class="earning_wrapper">
      <h2 class="mb-4 earning_graph_label">Earnings</h2>
      <earning-graph></earning-graph>
    </div>
    <NetEarningWidget value="60"></NetEarningWidget>
    <OrdersReceived></OrdersReceived>
  </div>
</template>

<script>
import EarningGraph from "./EarningGraph";
import NetEarningWidget from "./NetEarningWidget";
import OrdersReceived from "./OrdersReceived";
export default {
  data() {
    return {};
  },
  components: {
    EarningGraph,
    NetEarningWidget,
    OrdersReceived
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
  width: 50%;
  height: 100%;
  padding: 1rem;
  float: left;
  box-shadow: 2px 2px 10px #ccc;
}
</style>


