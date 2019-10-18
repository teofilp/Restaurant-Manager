<template>
  <div class="row mt-3">
    <div class="spinner-grow text-primary" :class="{active: isLoading}" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <Item v-for="product in products" class="col-3" :key="product.name" :product="product"></Item>
  </div>
</template>

<script>
import ProductCategoryListItem from "./ProductCategoryListItem";
import Api from "../../../api/api";
export default {
  data() {
    return {
      products: [],
      isLoading: false
    };
  },

  watch: {
    $route(to, from) {
      this.products = [];
      this.getProducts();
    }
  },

  methods: {
    getProducts: async function() {
      this.isLoading = true;
      try {
        let categoryName = this.$route.params.categoryName;
        let subcategoryName = this.$route.params.subcategoryName;

        this.products = await Api.getProductsByCategory(
          categoryName,
          subcategoryName
        );

        if (this.products.length == 0) {
          this.products = await Api.getProductCategory(
            categoryName,
            subcategoryName.toUpperCase()
          );
        }
      } catch {
      } finally {
        this.isLoading = false;
      }
    }
  },

  mounted() {
    this.getProducts();
  },

  components: {
    Item: ProductCategoryListItem
  }
};
</script>

<style scoped>
.spinner-grow {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

.spinner-grow.active {
  display: block;
}
</style>

