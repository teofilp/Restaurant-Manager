<template>
  <div class="wrapper">
    <i class="fas fa-star"></i>
    <h2>
      <span>4.7</span>
    </h2>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.wrapper {
  position: relative;
  float: left;
  height: calc(175px - 0.5rem);
  width: calc(50% - 0.5rem);
  margin-top: 1rem;
  background: white;
  box-shadow: 2px 2px 10px #ccc;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
}

.wrapper:hover {
  transform: scale(1.05);
  z-index: 100;
  border-color: #8272f7;
}

h2 {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 6rem;
  padding-right: 1rem;
  text-align: right;
  letter-spacing: 0.1rem;
}

h2 span {
  color: #8272f7;
}

i {
  font-size: 5rem;
  padding: 0.75rem;
  padding-left: 1.3rem;
  color: #8272f7;
}
</style>


