import { onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

export const useAnimSplit = (target:Element[]) => {

  const anim =  gsap.to(target, {
    // y: -100,
    marginRight: '0.4rem',
    color: '#c41567ff',
    // scale: 1.2,
    duration: 0.6,
    repeat: 1,
    ease: 'power1.inOut',
    yoyo: true,
    rotate:(...args)=> {
      return Math.random() * 20 - 20
    },
    immediateRender: false,
  })

  anim.pause()

  onBeforeUnmount(() => {
    anim.kill()
  })

  return { anim }
}
