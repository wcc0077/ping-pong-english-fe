import { defineStore } from 'pinia'
import banana_pic from '@/assets/pics/banana.png'
import apple_pic from '@/assets/pics/apple.png'
import rabbit_pic from '@/assets/pics/rabbit.png'
import audioSrc from '@/assets/audios/banana-1.mp3'
import audioSrc_2 from '@/assets/audios/banana-2.mp3'
import audio_zh from '@/assets/audios/香蕉.mp3'

export const useStore = defineStore('bag', {
  state: () => ({
    learntWords: [],
    learntToday: []
  }),

  getters: {
    learntCount: (state) => state.learntWords.length,
    learntTodayCount: (state) => state.learntToday.length,
  },

  actions: {

  },
})
