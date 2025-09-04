import { defineStore } from 'pinia'

const audio = new Audio()

audio.oncanplay = () => {
  const store = useAudioStore()
  store.isPlaying = true
  audio.play()
}

audio.onended = () => {
  // 播放结束后的逻辑
  const store = useAudioStore()
  store.isPlaying = false
}

export const useAudioStore = defineStore('audio', {
  state: () => ({
    audio: new Audio(),
    isPlaying: false,  // 是否在播放
    playMode: 'single', // 播放模式：single, serial,
    serialAudioList: [] as string[],
  }),

  actions: {
    playSingleAudio(src:string) {
      this.playMode = 'single'
      this.audio.src = src
      this.audio.load()
    },

    playSerialAudio(list: string[]) {
      this.playMode = 'serial'
      this.audio.src = list[0]
    }
  },
})
