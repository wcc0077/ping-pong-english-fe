<template>
  <div class="words-show">
    <LuoXuan3D :word="store.curWord.spell" v-if="false"/>
    <h2 ref="target" class="text-xl">{{ store.curWord.spell }}</h2>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LuoXuan3D from './luoxuan-3d/index.vue'
import { useMainCardStore } from '@/stores/mainCard'

const store = useMainCardStore()

import { animate, stagger, text } from 'animejs';


onMounted(() => {
  const target = ref<HTMLElement|null>(null);
  const { chars } = text.split('h2', { words: false, chars: true });
  animate(chars, {
    // Property keyframes
    y: [
      { to: '-2.75rem', ease: 'outExpo', duration: 600 },
      { to: 0, ease: 'outBounce', duration: 1400, delay: 0 }
      // { to: 0, ease: 'outExpo', duration: 600, delay: 0 }
    ],
    // Property specific parameters
    // rotate: {
    //   from: '-1turn',
    //   delay: 0
    // },
    delay: stagger(80),
    ease: 'inOutCirc',
    // loopDelay: 600,
    loop: true
  });
})

</script>

<style>
.words-show {
  font-size: 38px;
  font-weight: bold;
  color: #333;
}

 .text-xl {
  font-size: 2rem;
  color: currentColor;
  letter-spacing: 0.06em;
}
</style>
