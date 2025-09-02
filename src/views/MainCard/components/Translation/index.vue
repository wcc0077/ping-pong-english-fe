<template>
  <div class="translation" @click="click">
    {{store.curWord.zh}}
  </div>
</template>

<script setup lang="ts">
import { useMainCardStore } from '@/stores/mainCard';

const store = useMainCardStore()

const click = () => {
  store.play(store.curWord.audio_zh)
  store.picScale = 1.2
}
</script>

<style scoped>
.translation {
  font-size: 24px;
  color: #333;
  /* text-align: center; */
  /* margin-top: 20px; */
}
</style>
