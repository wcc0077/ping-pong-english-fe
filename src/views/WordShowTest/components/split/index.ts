import { log } from 'console'
import { gsap } from 'gsap'

export const animFactory = target => {
  const anim =  gsap.to(target, {
    // y: -100,
    marginRight: '0.3rem',
    color: '#c41567ff',
    // scale: 1.2,
    duration: 0.6,
    repeat: -1,
    ease: 'power1.inOut',
    yoyo: true,
    rotate:(args)=> {
      console.log(...args);
      return Math.random() * 20 - 10
    },
  })
  // anim.pause()
  return anim
}
