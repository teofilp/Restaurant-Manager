<template>
  <div class="wrapper row">
    <trending-orders-item class="col-md-3" style="padding: 0 .5rem"></trending-orders-item>
    <trending-orders-item class="col-md-3" style="padding: 0 .5rem"></trending-orders-item>
    <trending-orders-item class="col-md-3" style="padding: 0 .5rem"></trending-orders-item>
    <trending-orders-item class="col-md-3" style="padding: 0 .5rem"></trending-orders-item>
  </div>
</template>
<script>
import TrendingOrdersItem from "./TrendingOrdersItem";
export default {
  components: {
    TrendingOrdersItem
  }
};
</script>
<style scoped>
.wrapper.row {
  width: 100%;
  margin: 0;
  padding: 0.5rem;
  height: auto;
}
</style>


