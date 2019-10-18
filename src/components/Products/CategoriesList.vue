<template>
  <div id="categories_list_wrapper">
    <ul id="categories_list">
      <div class="d-inline" v-for="category in categories" :key="category.foodCategory">
        <router-link
          v-if="category.foodTypes.length == 1"
          :to="{name: 'categoryName' , params: {categoryName: getFormattedCategory(category.foodTypes[0])}}"
          active-class="active"
          class="categories_list_li"
          exact
          tag="li"
        >{{ category.foodTypes[0] }}</router-link>
        <li v-else class="categories_list_li">
          {{category.foodCategory}}
          <ul class="dropdown">
            <router-link
              v-for="foodType in category.foodTypes"
              :key="foodType"
              exact
              :to="`/products/category/${category.foodCategory}/${getFormattedCategory(foodType)}`"
              tag="li"
            >{{foodType}}</router-link>
          </ul>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["categories"],
  methods: {
    getFormattedCategory(category) {
      return category[0] + category.toLowerCase().slice(1, category.length);
    }
  }
};
</script>

<style scoped>
#categories_list_wrapper {
  width: 100%;
  /* overflow-x: auto; */
}

#categories_list {
  padding: 0;
  margin: 0;
  white-space: nowrap;
}

#categories_list li.categories_list_li {
  position: relative;
  display: inline-block;
  margin: 0.5rem;
  padding: 0.75rem 2rem;
  background: #425666;
  color: white;
  border-radius: 0.5rem;
  text-transform: uppercase;
  transition: color 0.3s, background-color 0.3s, border-radius 0.3s;
}

#categories_list li.categories_list_li:hover {
  cursor: pointer;
  border-radius: 0.25rem;
}

#categories_list li.categories_list_li.active {
  background: #8272f7;
  color: white;
  border-radius: 0.25rem;
}

.dropdown {
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  top: calc(100% + 0.5rem);
  left: 0;
  min-width: 100%;
  z-index: 100;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 2px #ccc;
  max-height: 0;
  height: auto;
  overflow: hidden;
  transition: max-height 0.5s;
}

.categories_list_li:hover .dropdown {
  max-height: 1500px;
}

.dropdown li {
  color: #425666;
  padding: 0.75rem;
  transition: font-weight 0.2s;
}

.dropdown li:hover {
  font-weight: 700;
}
</style>


