<template>
  <div class="large centered row">
    <p ref="target" class="text-xl">{{ word }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { createTimeline, stagger, text } from 'animejs';

const props = defineProps({
  word: ''
})

const target = ref<HTMLElement|null>(null);

onMounted(() => {
  text.split(target.value, {
    chars: `<span class="char-3d word-{i}">
      <em class="face face-top">{value}</em>
      <em class="face-front">{value}</em>
      <em class="face face-bottom">{value}</em>
    </span>`,
  });

  const charsStagger = stagger(100, { start: 0 });

  createTimeline({ defaults: { ease: 'linear', loop: true, duration: 1000 }})
  .add('.char-3d', { rotateX: -90 }, charsStagger)
  .add('.char-3d .face-top', { opacity: [.5, 0] }, charsStagger)
  .add('.char-3d .face-front', { opacity: [1, .5] }, charsStagger)
  .add('.char-3d .face-bottom', { opacity: [.5, 1] }, charsStagger);
})

</script>

<style>
.large {
  position: relative;
}

.char-3d {
  position: relative;
  transform-style: preserve-3d;
  transform-origin: 50% 50% 1rem;
}

.face {
  position: absolute;
  left: 0;
}

.face-bottom {
  top: 100%;
  transform-origin: 50% 0%;
  transform: rotateX(90deg);
}

.face-top {
  bottom: 100%;
  transform-origin: 50% 100%;
  transform: rotateX(-90deg);
}
</style>
