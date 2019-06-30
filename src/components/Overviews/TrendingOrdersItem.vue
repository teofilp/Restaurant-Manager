<template>
  <div class="small_padding">
    <div class="item_wrapper">
      <img class="food_image" src="./../../assets/foods/adminTrendingOrders1.jpg" alt />
      <div class="row mt-2">
        <h5 class="col-6 food_title">Beef Tartare</h5>
        <h5 class="col-6 price_tag">$34</h5>
      </div>

      <div class="row mt-2">
        <h6 class="col-6 order_number">
          Order
          <span>75</span>
        </h6>
        <h6 class="col-6 revenue">
          Revenue
          <span>$708</span>
        </h6>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.item_wrapper {
  height: 220px;
  background-color: white;
  box-shadow: 2px 2px 10px #ccc;
  transition: transform 0.2s ease-in-out;
  user-select: none;
}
.item_wrapper:hover {
  transform: scale(1.05);
}
.food_image {
  width: 100%;
  height: 70%;
}
.row {
  margin: 0;
}
.food_title {
  font-size: 0.9rem;
  padding-left: 1rem;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 0;
}
.price_tag {
  text-align: right;
  padding-right: 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: #3bd45f;
  margin-bottom: 0;
}

.order_number,
.revenue {
  padding-left: 1rem;
  font-size: 0.7rem;
  font-weight: 700;
  color: #bcbcbc;
  display: inline-block;
}

.order_number span,
.revenue span {
  color: #f2944e;
}

.revenue {
  text-align: right;
  display: inline-block;
  padding-right: 1rem;
}
</style>


