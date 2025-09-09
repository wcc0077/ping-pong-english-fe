<template>
  <div class="main-card">
    <div class="top">
      <TopHeader ref="topHeader"/>
      <CardClothWave/>
    </div>
    <div class="main-content"
      @click="handleClick"
      v-if="false"
    >
      <Translation/>
      <Pic/>
      <WordsShow :word="store"/>
    </div>
    <Closet v-else/>
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
import { useClickEmpty } from './hooks/useClickContentEmpty'
import { useCollectFlip } from './hooks/useCollectFlip'
import { onMounted , ref} from 'vue'
import { useStore } from '@/stores/animStore'
import Closet from './components/Quiz/Closet/index.vue'

const store = useMainCardStore()

const animStore = useStore()

const topHeader = ref<InstanceType<typeof TopHeader>|null>(null)

// onMounted(() => {
//   const { anim } = useCollectFlip('.main-content', '.bag-icon')
//   animStore.flip2bag = anim
// })

const {
  handleClick } = useClickEmpty(store)
</script>

<style>
.main-card {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.main-content{
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
