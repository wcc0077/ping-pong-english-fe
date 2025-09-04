import { Flip } from 'gsap/Flip'
import { gsap } from 'gsap'
import { onBeforeUnmount } from 'vue'

gsap.registerPlugin(Flip)

export const useCollectFlip = (source: string, target: string) => {

  const anim = Flip.fit(source, target, {
    scale: true,
    duration: 1.5,
    ease: 'power1.inOut',
    absolute: true,
    spin: true,
  })

  anim.pause()

  onBeforeUnmount(() => {
    anim.kill()
  })

  return { anim }
}
