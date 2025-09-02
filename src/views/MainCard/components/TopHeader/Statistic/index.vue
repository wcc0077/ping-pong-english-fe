<template>
  <div v-show="store.learntTodayCount > 0">
    今日已学 {{ store.learntTodayCount }} 个
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/bag';

const store = useStore();

</script>

<style scoped>

</style>
