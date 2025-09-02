<template>
  <div class="main-card">
    <CardClothWave/>
    <Translation/>
    <Pic/>
    <WordsShow :word="store"/>
    <FooterBtns/>
  </div>
</template>

<script setup lang="ts">
import CardClothWave from './components/CardClothWave/index.vue'
import Translation from './components/Translation/index.vue'
import Pic from './components/Pic/index.vue'
import WordsShow from './components/WordsShow/index.vue'
import FooterBtns from './components/FooterBtns/index.vue'
import { useMainCardStore } from '@/stores/mainCard'

const store = useMainCardStore()
</script>

<style scoped>
.main-card {
  height: 100%;
  width: 100%;
  padding: 100px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
}
</style>
