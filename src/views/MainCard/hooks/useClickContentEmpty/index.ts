import { useStore } from '@/stores/animStore'
import { playSingleAudio } from '@/gloabl/audio'
const animStore = useStore()

export const useClickEmpty = (mainStore) => {

  const handlePointerDown = (e) => {
    e.preventDefault()
    if(e.target !== e.currentTarget) return
    animStore.word.split.restart()
    // store.play(store.curWord.audio)
  }


  const handlePointerUp = (e) => {
    e.preventDefault()
    if(e.target !== e.currentTarget) return
    animStore.word.split.reverse()
  }

  const handleClick = (e) => {
    e.preventDefault()
    if(e.target !== e.currentTarget) return
    animStore.word.split.restart()
    playSingleAudio(mainStore.curWord.audio)
    // store.play(store.curWord.audio)
  }

  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });

  return {
    handlePointerDown,
    handlePointerUp,
    handleClick
  }
}
