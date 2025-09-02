<template>
  <div class="words-show">
    <LuoXuan3D :word="store.curWord.spell" v-if="false"/>
    <div>{{ store.curWord.spell }}</div>
  </div>
</template>

<script setup lang="ts">
import LuoXuan3D from './luoxuan-3d/index.vue'
import { useMainCardStore } from '@/stores/mainCard'

const store = useMainCardStore()
</script>

<style scoped>
.words-show {
  font-size: 38px;
  font-weight: bold;
  color: #333;
}
</style>
