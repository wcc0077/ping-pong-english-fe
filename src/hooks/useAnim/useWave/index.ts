import { onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

export const useAnimWave = (target:Element[]) => {

  const getRandomRotate = () => Math.random() * 60 - 30

  const anim =  gsap.to(target, {
    y: '-1.3rem',
    duration: 0.3,
    ease: 'sine.inOut',
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
    color: '#c41567ff',
    stagger:{
      repeat: 1,
      yoyo: true,
      each: 0.1,
    },
    rotate: getRandomRotate,
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
