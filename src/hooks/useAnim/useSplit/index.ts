import { onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

export const useAnimSplit = (target:Element[]) => {

  const getRandomRotate = () => Math.random() * 60 - 30

  const anim =  gsap.to(target, {
    // y: -100,
    marginRight: '0.4rem',
    color: '#c41567ff',
    // scale: 1.2,
    duration: 0.4,
    repeat: 1,
    ease: 'power1.inOut',
    yoyo: true,
    rotate:()=> {
      return getRandomRotate()
    },
    immediateRender: false,
    onComplete: ()=>{
      anim.vars.rotate = getRandomRotate
      anim.invalidate()
    }
  })

  anim.pause()

  onBeforeUnmount(() => {
    anim.kill()
  })

  return { anim }
}
