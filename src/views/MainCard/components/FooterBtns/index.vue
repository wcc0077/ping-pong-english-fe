<template>
  <div class="footer-btns">
    <span class="iconfont icon-iconproject" @click.stop="click1"></span>
    <span class="iconfont icon-bofang"  @click.stop="click()"></span>
    <span @click="test">ceshi</span>
    <span @click="add">加衣服</span>
  </div>
</template>

<script setup lang="ts">
import { useMainCardStore } from '@/stores/mainCard';
import { useStore } from '@/stores/animStore';
import { playSingleAudio, playSerialAudio } from '@/gloabl/audio'

const store = useMainCardStore()

const animStore = useStore()

const click1 = () => {
  playSerialAudio([
    store.curWord.audio,
    store.curWord.audio_2,
    store.curWord.audio_zh,
    store.curWord.audio_2,
    store.curWord.audio,
  ])
}

const click = () => {
  playSingleAudio(store.curWord.audio_2)
  animStore.word.split.restart()
}

const test = () => {
  animStore.flip2bag.restart()
}

const add = () => {
  store.clothWaveWords.unshift(store.curWord)
}
</script>

<style scoped>
.footer-btns {
  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translate(-50%, 0);
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
}

.iconfont {
  font-size: 25px;
  margin: 0 10px;
  color: #333;
}

.icon-iconproject {
  margin-right: 40px;
}
</style>
