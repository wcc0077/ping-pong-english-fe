<template>
  <div>
    <h2 ref="target" class="text-xl">{{ word }}</h2>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { animate, stagger, text } from 'animejs';

defineProps({
  word: {
    type: String,
    default: ''
  }
})

onMounted(() => {
  const target = ref<HTMLElement|null>(null);
  const { chars } = text.split('h2', { words: false, chars: true });
  animate(chars, {
    // Property keyframes
    y: [
      { to: '-2.75rem', ease: 'outExpo', duration: 400 },
      { to: 0, ease: 'outBounce', duration: 600, delay: 0 }
      // { to: 0, ease: 'outExpo', duration: 600, delay: 0 }
    ],
    // Property specific parameters
    // rotate: {
    //   from: '-1turn',
    //   delay: 0
    // },
    delay: stagger(140),
    ease: 'inOutCirc',
    // loopDelay: 600,
    loop: true
  });
})
</script>

<style scoped>

</style>
