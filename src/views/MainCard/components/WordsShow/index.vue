<template>
  <div class="words-show">
    <LuoXuan3D :word="store.curWord.spell" v-if="false"/>
    <Dance_1 :word="store.curWord.spell" v-else/>
  </div>
</template>

<script setup lang="ts">

import LuoXuan3D from './luoxuan-3d/index.vue'
import Dance_1 from './Dance-1/index.vue'
import { useMainCardStore } from '@/stores/mainCard'

const store = useMainCardStore()



</script>

<style>
.words-show {
  font-size: 38px;
  font-weight: bold;
  color: #333;
}

 .text-xl {
  font-size: 2rem;
  color: currentColor;
  letter-spacing: 0.06em;
}
</style>
