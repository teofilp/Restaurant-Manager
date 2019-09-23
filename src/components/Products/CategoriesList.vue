<template>
  <div id="categories_list_wrapper">
    <ul id="categories_list">
      <router-link
        v-for="category in categories"
        :to="{name: 'categoryName' , params: {categoryName: category}}"
        active-class="active"
        exact
        :key="category"
        tag="li"
      >{{ category }}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        "desert",
        "side-dishes",
        "pizza",
        "pasta",
        "salads",
        "drinks"
      ]
    };
  }
};
</script>

<style scoped>
#categories_list_wrapper {
  width: 100%;
  overflow-x: auto;
}

#categories_list {
  padding: 0;
  margin: 0;
  white-space: nowrap;
}

#categories_list li {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.75rem 2rem;
  background: #425666;
  color: white;
  border-radius: 0.5rem;
  text-transform: uppercase;
  transition: color 0.3s, background-color 0.3s;
}

#categories_list li:hover {
  cursor: pointer;
}

#categories_list li.active {
  background: #8272f7;
  color: white;
}
</style>


