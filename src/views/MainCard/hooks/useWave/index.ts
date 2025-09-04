import { onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { useMainCardStore } from '@/stores/mainCard'

export const useAnimWave = target => {
  const anim =  gsap.to(target, {
    y: '-1rem',
    duration: 0.4,
    ease: 'sine.inOut',
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
    rotation: 'random(-10, 10)',
    color: '#c41567ff',
    stagger:{
      repeat: 1,
      yoyo: true,
      each: 0.1,
    },
    immediateRender: false,
  })

  const store = useMainCardStore()
  store.anim.wave = anim
  anim.pause()

  onBeforeUnmount(() => {
    anim.kill()
  })

  return anim
}
