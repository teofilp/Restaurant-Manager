<template>
  <div id="dashboard">
    <Menu></Menu>
    <div id="dashboard_content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Menu from "./Menu";
export default {
  components: {
    Menu
  }
};
</script>
<style scoped>
#dashboard {
  position: absolute;
  width: 1400px;
  height: 800px;
  background: #ebf0f4;
  border-radius: 0.25rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#dashboard_content {
  position: absolute;
  width: 85%;
  height: 100%;
  left: 15%;
  background: #f8f7ff;
}
</style>


