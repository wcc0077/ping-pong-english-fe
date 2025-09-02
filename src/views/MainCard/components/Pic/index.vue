<template>
  <div class="pic" :style="style">
    <img :src="store.curWord.pic" alt="pic">
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useMainCardStore } from '@/stores/mainCard';

const store = useMainCardStore()

const style = computed(() => {
  return {
    transform: `scale(${store.picScale})`,
  }
})

watch(() => store.picScale, (newVal) => {
  let timer
  if (newVal !== 1) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      store.picScale = 1
    }, 400);
  }
})
</script>

<style scoped>
.pic {
  /* width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1); */
  transition: transform 0.9s ease;
}
</style>
