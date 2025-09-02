<template>
  <div class="top-header">
    <Back />
    <Statistic />
    <BagIcon />
  </div>
</template>

<script setup lang="ts">
import Back from './Back/index.vue'
import Statistic from './Statistic/index.vue'
import BagIcon from './BagIcon/index.vue'
import { useMainCardStore } from '@/stores/mainCard'

const store = useMainCardStore()
</script>

<style scoped>
.top-header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
