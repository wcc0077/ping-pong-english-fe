import { defineStore } from 'pinia'
import { gsap } from 'gsap'

type Tween = gsap.core.Tween

export const useStore = defineStore('anim', {
  state: () => ({
    translation: null as unknown as Tween,
    pic: null as unknown as Tween,
    word: {} as {split: Tween, wave: Tween, getOutLarge: Tween},
    flip2bag: null as unknown as Tween,
    flip2cloth: null as unknown as Tween,
  }),
})
