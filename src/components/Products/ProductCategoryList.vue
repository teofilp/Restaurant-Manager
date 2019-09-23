<template>
  <div class="row mt-3">
    <Item
      v-for="product in products"
      class="col-3"
      :key="product"
      product_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    ></Item>
  </div>
</template>

<script>
import ProductCategoryListItem from "./ProductCategoryListItem";
export default {
  data() {
    return {
      products: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  mounted() {
    console.log("ceva");
  },

  components: {
    Item: ProductCategoryListItem
  }
};
</script>

<style scoped>
</style>

