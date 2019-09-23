<template>
  <div class="container mt-3">
    <categories-list :categories="categories"></categories-list>
    <router-view></router-view>
  </div>
</template>
<script>
import CategoriesList from "./CategoriesList";
import Api from "../../../api/api";
export default {
  data() {
    return {
      categories: []
    };
  },
  async mounted() {
    this.categories = await Api.getProductCategories();
    if (this.categories.length > 0)
      this.$router.push("products/category/" + this.categories[0]);
  },
  components: {
    CategoriesList
  }
};
</script>
<style scoped>
.container {
  height: calc(100% - 1.5rem);
  overflow: auto;
}

::-webkit-scrollbar {
  width: 0.15rem;
}

::-webkit-scrollbar-track {
  background: #ccc;
}

::-webkit-scrollbar-thumb {
  background: #425666;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>


