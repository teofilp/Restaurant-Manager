<template>
  <div class="wrapper">
    <h4 class="pl-3 mt-4">Overview</h4>
    <Overview></Overview>
    <h4 class="pl-3 mt-5">Trending Orders</h4>
    <trending-orders-list></trending-orders-list>
  </div>
</template>
<script>
import Overview from "./Overview";
import TrendingOrdersList from "./TrendingOrdersList";
export default {
  components: {
    Overview,
    TrendingOrdersList
  }
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}

h4 {
  font-size: 1.15rem;
  font-weight: bolder;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
</style>


