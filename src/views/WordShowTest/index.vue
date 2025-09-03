<template>
  <div class="word-show-test" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
    <div class="word-show-test-1"  >
      banana
    </div>
    <div class="word-show-test-2">
      banana
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { SplitText } from 'gsap/SplitText'
import { gsap } from 'gsap'
import { animFactory } from './components/split'
import { animWaveFactory } from './components/wave'

gsap.registerPlugin(SplitText)

let anim = null

const handleTouchStart = (e) => {
  e.preventDefault()
  anim.restart()
}

const handleTouchEnd = (e) => {
  e.preventDefault()
  anim.reverse()
}

onMounted(() => {
  const { chars } = SplitText.create('.word-show-test-1', { type: 'chars' })
  anim = animFactory(chars)

  const { chars: chars2 } = SplitText.create('.word-show-test-2', { type: 'chars' })
  const animWave = animWaveFactory(chars2)
})
</script>

<style>
.word-show-test {
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  height: 100vh;
  background-color: #f0f0f0;
  >div {
    height: 100px;
    border: 1px solid #ccc;
  }
}
div {
  font-size: 34px;
  color: #333;
}
</style>
