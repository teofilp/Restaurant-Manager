<template>
  <div class="container mt-3">
    <categories-list></categories-list>
    <router-view></router-view>
  </div>
</template>
<script>
import CategoriesList from "./CategoriesList";
export default {
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


