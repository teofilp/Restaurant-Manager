<template>
  <div class="small_padding mb-3">
    <div class="item_wrapper">
      <img class="product_image" :src="product.imgLink" alt />
      <div class="row mt-2">
        <h5 class="col-8 product_title">{{product.name}}</h5>
        <h5 class="col-4 price_tag">{{product.price}} Lei</h5>
      </div>
      <div class="row">
        <p class="product_description">{{getProductDescription}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  computed: {
    getProductDescription() {
      if (!this.product.desc) return;
      if (this.product.desc.length < 180) return this.product.desc;
      return this.product.desc.substr(0, 180) + "...";
    }
  }
};
</script>
<style scoped>
.item_wrapper {
  height: 250px;
  background-color: white;
  box-shadow: 2px 2px 10px #ccc;
  transition: transform 0.2s ease-in-out;
  user-select: none;
  overflow: hidden;
  line-height: 0.85rem;
}
.item_wrapper:hover {
  transform: scale(1.05);
  cursor: pointer;
}
.product_image {
  width: 100%;
  height: 50%;
}
.row {
  margin: 0;
}
.product_title {
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

.product_description {
  padding: 1rem;
  padding-top: 0.5rem;
  font-size: 0.7rem;
}
</style>


