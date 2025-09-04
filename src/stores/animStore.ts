import { defineStore } from 'pinia'
import { gsap } from 'gsap'

export const useStore = defineStore('anim', {
  state: () => ({
    translation: null as unknown as gsap.core.Tween,
    pic: null as unknown as gsap.core.Tween,
    word: {} as {split: gsap.core.Tween, wave: gsap.core.Tween},
    flip2bag: null as unknown as gsap.core.Tween,
    flip2cloth: null as unknown as gsap.core.Tween,
  }),
})
