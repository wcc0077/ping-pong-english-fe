<template>
  <div class="footer-btns">
    <span class="iconfont icon-iconproject" @click.stop="useConsistentRead(store)"></span>
    <span class="iconfont icon-bofang"  @click.stop="click()"></span>
  </div>
</template>

<script setup lang="ts">
import { useMainCardStore } from '@/stores/mainCard';
import { useConsistentRead } from '../../hooks/useConsistentRead'
import { useStore } from '@/stores/animStore';
import { playSingleAudio } from '@/gloabl/audio'

const store = useMainCardStore()

const animStore = useStore()
const click = () => {
  playSingleAudio(store.curWord.audio_2)
  animStore.word.split.restart()
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
