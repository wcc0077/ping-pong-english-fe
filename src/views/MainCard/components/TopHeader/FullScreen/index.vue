<template>
  <div id="fullscreenBtn" >
    全屏
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
    const btn = document.getElementById("fullscreenBtn");
    btn.addEventListener("click", () => {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { // Safari/Chrome旧版
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
      }
    });
  })

</script>

<style scoped>

</style>
