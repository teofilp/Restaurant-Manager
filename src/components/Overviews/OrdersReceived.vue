<template>
  <div class="wrapper">
    <h5>Orders Received</h5>
    <i class="fas fa-medal"></i>
    <h4>58349</h4>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.wrapper {
  position: relative;
  height: calc(175px - 0.5rem);
  width: calc(50% - 0.5rem);
  background: white;
  padding: 1rem;
  box-shadow: 2px 2px 10px #ccc;
  margin-left: 1rem;
  float: left;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
}

.wrapper:hover {
  transform: scale(1.05);
  z-index: 100;
  border-color: #8272f7;
  cursor: pointer;
}

h5 {
  text-align: center;
}
h4 {
  text-align: center;
}

i {
  text-align: center;
  font-size: 3rem;
  display: block;
  margin: 1rem 0;
  color: #8272f7;
}
</style>


