<template>
  <div style="width: 100%; height: 100%">
    <svg class="progress blue noselect" data-progress="65" x="0px" y="0px" viewBox="0 0 80 80">
      <path class="track" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
      <path class="fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
      <text class="value" x="50%" y="55%">0%</text>
    </svg>
  </div>
</template>
<script>
export default {
  mounted() {
    var forEach = function(array, callback, scope) {
      for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
      }
    };

    var max = -210;
    forEach(document.querySelectorAll(".progress"), function(index, value) {
      let percent = value.getAttribute("data-progress");
      value
        .querySelector(".fill")
        .setAttribute(
          "style",
          "stroke-dashoffset: " + ((100 - percent) / 100) * max
        );
      value.querySelector(".value").innerHTML = percent + "%";
    });
  }
};
</script>
<style scoped>
.progress {
  width: auto;
  height: 100%;
  background: transparent;
}
.progress .track,
.progress .fill {
  fill: rgba(0, 0, 0, 0);
  stroke-width: 10;
  transform: rotate(90deg) translate(0px, -80px);
}
.progress .track {
  stroke: #ccc;
}
.progress .fill {
  stroke: #8272f7;
  stroke-dasharray: 219.99078369140625;
  stroke-dashoffset: -219.99078369140625;
  transition: stroke-dashoffset 1s;
}
.progress.blue .fill {
  stroke: #8272f7;
}
.progress.green .fill {
  stroke: rgb(186, 223, 172);
}
.progress .value {
  font-weight: 500;
  fill: #8272f7;
  text-anchor: middle;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
}
</style>


