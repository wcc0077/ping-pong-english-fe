export const useAudioAnim = target => {
  
  const clickTranslation = () => {
    target.classList.add('anim')
  }

  const clickPic = ()=> {

  }

  const clickWord =()=> {

  }

  const clickAudioSerial = () => {
    target.classList.add('anim')
  }

  return {
    clickTranslation,
    clickPic,
    clickWord,
    clickAudioSerial,
  }
}
