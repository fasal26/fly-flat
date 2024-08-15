<template>
  <div class="gf-loader">
    <div class="loader-inner line-scale">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.line-scale > div {
  width: 4px;
  height: 30px;
  border-radius: 2px;
  margin: 2.5px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
}

@-webkit-keyframes line-scale {
  0% {
    -webkit-transform: scaley(0.9);
    transform: scaley(0.9);
  }
  50% {
    -webkit-transform: scaley(0.3);
    transform: scaley(0.3);
  }
  100% {
    -webkit-transform: scaley(0.9);
    transform: scaley(0.9);
  }
}
@keyframes line-scale {
  0% {
    -webkit-transform: scaley(0.9);
    transform: scaley(0.9);
  }
  50% {
    -webkit-transform: scaley(0.3);
    transform: scaley(0.3);
  }
  100% {
    -webkit-transform: scaley(0.9);
    transform: scaley(0.9);
  }
}

.line-scale > div:nth-child(1) {
  background-color: #ffbc00;
  -webkit-animation: line-scale 0.8s -0.4s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation: line-scale 0.8s -0.4s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}

.line-scale > div:nth-child(2) {
  background-color: #ffbc00;
  -webkit-animation: line-scale 0.8s -0.3s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation: line-scale 0.8s -0.3s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}

.line-scale > div:nth-child(3) {
  background-color: #ffbc00;
  -webkit-animation: line-scale 0.8s -0.2s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation: line-scale 0.8s -0.2s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}

.line-scale > div:nth-child(4) {
  background-color: #ffbc00;
  -webkit-animation: line-scale 0.8s -0.1s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation: line-scale 0.8s -0.1s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}

.gf-loader {
  z-index: 999;
  top: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
