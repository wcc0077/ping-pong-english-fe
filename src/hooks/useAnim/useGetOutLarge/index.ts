import { onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

export const useAnimGetOutLarge = (target:Element[]) => {

  const anim =  gsap.from(target, {
    scale: 0,
    y: '-5rem',
    x: 'random(-1rem,1rem)',
    immediateRender: false,
    duration: 0.4,
    ease: 'bound.inOut',
    // repeat: 1,
    stagger: 0.25
  })

  anim.pause()

  onBeforeUnmount(() => {
    anim.kill()
  })

  return { anim }
}
