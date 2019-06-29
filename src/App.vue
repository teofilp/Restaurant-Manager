<template>
  <div id="app">
    <dashboard></dashboard>
  </div>
</template>
<script>
import Dashboard from "./components/Dashboard";
export default {
  components: {
    Dashboard
  }
};
</script>

<style>
@import url("assets/fontawesome-free-5.9.0-web/css/all.css");
body {
  width: 100%;
  height: 100vh;
  margin: 0;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("./assets/dash_bg.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
