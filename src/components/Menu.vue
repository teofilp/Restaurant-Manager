<template>
  <div id="nav_wrapper">
    <ul>
      <router-link tag="li" to="/" class="active">
        <i class="fas fa-layer-group p-2 ml-4 mr-2"></i>Overviews
      </router-link>
      <router-link tag="li" to="/products">
        <i class="fas fa-hamburger p-2 ml-4 mr-2"></i>Products
      </router-link>
      <router-link tag="li" to="/orders">
        <i class="fas fa-list p-2 ml-4 mr-2"></i>Orders
      </router-link>
      <router-link tag="li" to="/staff">
        <i class="fas fa-utensils p-2 ml-4 mr-2"></i>Staff
      </router-link>
      <router-link tag="li" to="/reviews">
        <i class="fas fa-smile p-2 ml-4 mr-2"></i>Reviews
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#nav_wrapper {
  position: absolute;
  width: 15%;
  height: 100%;
  background: #425666;
}

ul {
  position: absolute;
  list-style: none;
  width: 100%;
  top: 20%;
  padding: 0;
}

ul li {
  margin-bottom: 2rem;
  color: #ccc;
  transition: all 0.3s;
}

i {
  border-radius: 0.5rem;
  background: transparent;
  transition: all 0.3s;
}

li:hover i,
li.active i {
  background: #8272f7;
  color: white;
}

li:hover {
  cursor: pointer;
  color: white;
}
</style>


