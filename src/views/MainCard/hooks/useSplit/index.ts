import { onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { useMainCardStore } from '@/stores/mainCard'

export const useAnimSplit = target => {

  const anim =  gsap.to(target, {
    // y: -100,
    marginRight: '0.4rem',
    color: '#c41567ff',
    // scale: 1.2,
    duration: 0.6,
    // repeat: -1,
    ease: 'power1.inOut',
    yoyo: true,
    rotate:(...args)=> {
      return Math.random() * 20 - 20
    },
    immediateRender: false,
  })

  const store = useMainCardStore()
  store.anim.split = anim
  anim.pause()

  onBeforeUnmount(() => {
    anim.kill()
  })

  return anim
}
