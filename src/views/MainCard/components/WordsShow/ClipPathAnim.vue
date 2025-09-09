<template>
  <div class="clip-path-anim">
    apple
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.clip-path-anim {
  color: blue;
  font-size: 40px;
  font-weight: 600;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top:0 ;
    height: 100%;
    width: 100%;
    background-color: white;
    transition: width 1s ease;
  }
}
</style>
