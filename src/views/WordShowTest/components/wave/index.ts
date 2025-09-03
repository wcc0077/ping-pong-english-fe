import { gsap } from 'gsap'

export const animWaveFactory = target => {
  const anim =  gsap.to(target, {
    color: '#ff0000',
    y: -50,
    // scale: 1.2,
    duration: 0.4,
    repeat: -1,
    ease: 'sine.inOut',
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
    rotation: 'random(-10, 10)',
    // yoyo: true,
    // yoyoEase: 'power1.inOut',
    stagger: 0.2,
    // reversed: true
  })
  // anim.pause()
  return anim
}
