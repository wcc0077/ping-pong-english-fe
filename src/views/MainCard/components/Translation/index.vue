<template>
  <div class="translation" @click="click" ref="translation">
    {{store.curWord.zh}}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { SplitText } from 'gsap/SplitText'
import { useMainCardStore } from '@/stores/mainCard';
import { useAnimSplit } from '@/hooks/useAnim/useSplit'
import {  useStore } from '@/stores/animStore'

const translation = ref<HTMLElement|null>(null)

const animStore = useStore()
onMounted(()=> {
  const { chars } = SplitText.create(translation.value, { type: 'chars' })
  const { anim } = useAnimSplit(chars)
  animStore.translation = anim
})

const store = useMainCardStore()

const click = () => {
  store.play(store.curWord.audio_zh)
  animStore.translation.restart()
  animStore.pic.restart()
}
</script>

<style scoped>
.translation {
  font-size: 24px;
  color: #333;
  user-select: none;
  /* text-align: center; */
  /* margin-top: 20px; */
}
</style>
