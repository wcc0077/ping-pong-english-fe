import { defineStore } from 'pinia'
import banana_pic from '@/assets/pics/banana.png'
import apple_pic from '@/assets/pics/apple.png'
import rabbit_pic from '@/assets/pics/rabbit.png'
import audioSrc from '@/assets/audios/banana-1.mp3'
import audioSrc_2 from '@/assets/audios/banana-2.mp3'
import audio_zh from '@/assets/audios/香蕉.mp3'

const clothWaveWords = [
   {
      spell: 'banana',
      zh: '香蕉',
      pic: banana_pic,
      audio: audioSrc,
      audio_2: audioSrc_2,
      audio_zh:audio_zh
    },
    {
      spell: 'apple',
      zh: '苹果',
      pic: apple_pic,
      audio: audioSrc,
      audio_2: audioSrc_2,
      audio_zh:audio_zh
    },
    {
      spell: 'rabbit',
      zh: '兔子',
      pic: rabbit_pic,
      audio: audioSrc,
      audio_2: audioSrc_2,
      audio_zh:audio_zh
    },
]

export const useMainCardStore = defineStore('main-card', {
  state: () => ({
    curWord: {
      spell: 'banana',
      zh: '香蕉',
      pic: banana_pic,
      audio: audioSrc,
      audio_2: audioSrc_2,
      audio_zh:audio_zh
    },
    audio: new Audio(),
    picScale: 1,
    clothWaveWords,
  }),
  actions: {
    play(src:string) {
      this.audio.src = src
      this.audio.play()
    },
  },
})
