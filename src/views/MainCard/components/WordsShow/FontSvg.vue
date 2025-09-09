<template>
  <div class="font-svg" ref="fontsvg">

  </div>
</template>

<script setup lang="ts">
import { font2svg ,all} from '@/styles/fonts/font-svg-map'
import { nextTick, onMounted, ref } from 'vue';
import {  gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin)

const fontsvg = ref(null)

onMounted(() => {
  // fontsvg.value.innerHTML = Object.values(font2svg).reduce((sum,cur) => {
  //   return sum + cur
  // },'')

  fontsvg.value.innerHTML = font2svg.a

  //draws all elements with the "draw-me" class applied
  nextTick(()=> {
    // gsap.set("#path1", {visibility:"visible"});
    gsap.from("path", {duration:2,drawSVG: 0, opacity:0});
  })
  // fontsvg.value.innerHTML = all
})
</script>

<style>
.font-svg {
  width: 100%;
  svg {
    /* margin: 20px; */
    stroke: red !important;
  }
  path {
    stroke: #0ae448;
    /* fill: #0ae448; */
    /* fill: red; */
    fill: none;
    stroke-width: 2px;
    /* visibility: hidden; */
  }
}
</style>
