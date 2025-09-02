<template>
  <div class="footer-btns">
    <span class="iconfont icon-iconproject" @click="click(store.curWord.audio)"></span>
    <span class="iconfont icon-bofang"  @click="click(store.curWord.audio_2)"></span>
  </div>
</template>

<script setup lang="ts">
import { useMainCardStore } from '@/stores/mainCard';

const store = useMainCardStore()

const click = (src: string) => {
  store.play(src)
  store.picScale = 1.2
}
</script>

<style scoped>
.footer-btns {
  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translate(-50%, 0);
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.iconfont {
  font-size: 25px;
  margin: 0 10px;
  color: #333;
}

.icon-iconproject {
  margin-right: 20px;
}
</style>
