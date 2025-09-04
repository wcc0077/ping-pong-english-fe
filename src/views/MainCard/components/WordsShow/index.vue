<template>
  <div class="words-show matte-3d-4" ref="wordsShow" @click="click">
      {{store.curWord.spell}}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { SplitText } from 'gsap/SplitText'
import { useMainCardStore } from '@/stores/mainCard'
import { useAnimSplit } from '@/hooks/useAnim/useSplit'
import { useAnimWave } from '@/hooks/useAnim/useWave'
import { useStore as useAnimStore } from '@/stores/animStore'
import { playSingleAudio } from '@/gloabl/audio'

const store = useMainCardStore()

const wordsShow = ref<HTMLElement|null>(null)
const animStore = useAnimStore()

onMounted(() => {
  const { chars } = SplitText.create(wordsShow.value, { type: 'chars' })
  const { anim :split } = useAnimSplit(chars)
  const { anim : wave } = useAnimWave(chars)
  animStore.word.split = split
  animStore.word.wave = wave
})

const click = () => {
  // store.play(store.curWord.audio_2)
  // split.value.restart()
  playSingleAudio(store.curWord.audio_2)
  animStore.word.wave.restart()
}
</script>

<style>
.words-show {
  user-select: none;
}
.matte-3d-4  {
            font-size: 3rem;
            font-weight: bold;
            /* text-align: center; */
            color: #4a4a4a;
            text-shadow:
                0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1),
                1px 1px 1px rgba(0, 0, 0, 0.1),
                1.5px 1.5px 1.5px rgba(0, 0, 0, 0.08),
                2px 2px 2px rgba(0, 0, 0, 0.06);
            margin-bottom: 50px;
            /* padding: 25px; */
            /* background: linear-gradient(150deg, #f8f8f8 0%, #eaeaea 100%); */
            /* border-radius: 10px; */
            /* box-shadow:
                inset 1px 1px 3px rgba(0, 0, 0, 0.08),
                inset -1px -1px 3px rgba(255, 255, 255, 0.6),
                3px 3px 6px rgba(0, 0, 0, 0.06),
                6px 6px 12px rgba(0, 0, 0, 0.03); */
            /* letter-spacing: 1.5px; */
        }
</style>
