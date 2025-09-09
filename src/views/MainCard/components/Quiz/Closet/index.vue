<template>
  <div>
    <div class="word-to-close">
      <div
        v-for="(item, index) in wordWithHoleList"
        :id="'item-' + index"
        :key="index"
      >
        <span>{{ item ? item : '_' }}</span>
      </div>
    </div>
    <div class="candidate-words">
      <div class="item" v-for="(item,index) in candidateList" :key="index" >
        <span @click="fill">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { genCandidateList } from './utils/charsHelper'
import { Flip } from 'gsap/Flip'

const { holeChars, wordWithHoleList, candidateList } = genCandidateList('app')

const hasFilled = []

const fill = (e) => {
  if(hasFilled.length == holeChars.length) return

  // 刚开始判断对不对 todo

  const targetId = '#item-' +  holeChars[hasFilled.length][0]

  const anim = Flip.fit(e.target, targetId, {
    scale: true,
    duration: 0.5,
    ease: 'power1.inOut',
    absolute: true,
    spin: true,
  })
  hasFilled.push(0)
}

</script>

<style scoped>
.word-to-close {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px;
  font-size: 20px;
  letter-spacing: .3rem;
}
.candidate-words {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 350px;
  margin: 0 auto;
  .item {
    border-radius: 8px;
    width: 50px;
    height: 50px;
    text-align: center;
    border: 1px solid rgb(174, 175, 171);
    line-height: 50px;
    margin: 20px;
    font-size: 20px;
  }
}
</style>
