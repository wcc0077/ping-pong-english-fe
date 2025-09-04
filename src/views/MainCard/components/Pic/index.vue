<template>
  <div class="pic">
    <img :src="store.curWord.pic" alt="pic" @click="click" ref="pic"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMainCardStore } from '@/stores/mainCard';
import { useAnimScale } from '@/hooks/useAnim/useScale'
import { useStore } from '@/stores/animStore'
import { playSingleAudio } from '@/gloabl/audio'

const pic = ref<HTMLElement|null>(null)
const animStore = useStore()

const store = useMainCardStore()

onMounted(()=> {
  const { anim } = useAnimScale(pic.value as HTMLElement)
  animStore.pic = anim
})

const click = () => {
  animStore.pic.restart()
  playSingleAudio(store.curWord.audio_2)
  animStore.word.split.restart()
}

</script>

<style scoped>
.pic {
}
</style>
