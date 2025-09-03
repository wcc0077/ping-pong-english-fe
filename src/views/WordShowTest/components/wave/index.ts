import { gsap } from 'gsap'

export const animWaveFactory = target => {
  const anim =  gsap.to(target, {
    color: '#ff0000',
    y: -50,
    // scale: 1.2,
    duration: 0.5,
    repeat: -1,
    ease: 'power1.inOut',
    transformOrigin: "center",
    // yoyo: true,
    // yoyoEase: 'power1.inOut',
    stagger: 0.1,
    // reversed: true
  })
  // anim.pause()
  return anim
}
