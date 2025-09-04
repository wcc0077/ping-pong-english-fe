import { onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

export const useAnimScale = (target: HTMLElement) => {

  const anim =  gsap.to(target, {
    scale: 1.15,
    immediateRender: false,
    yoyo: true,
    duration: 0.4,
    ease: 'power1.inOut',
    repeat: 1,
  })

  anim.pause()

  onBeforeUnmount(() => {
    anim.kill()
  })

  return { anim }
}
