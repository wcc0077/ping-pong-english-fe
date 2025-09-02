<template>
  <div class="main-card">
    <div class="top">
      <TopHeader/>
      <CardClothWave/>
    </div>
    <div class="content">
      <Translation/>
      <Pic/>
      <WordsShow :word="store"/>
    </div>
    <FooterBtns/>
  </div>
</template>

<script setup lang="ts">
import TopHeader from './components/TopHeader/index.vue'
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
  position: relative;
  display: flex;
  flex-direction: column;
}

.content{
  width: 100%;
  padding: 120px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 1;
}
</style>
