export const useSplitHandler = (store) => {

  const handlePointerDown = (e) => {
    e.preventDefault()
    if(e.target !== e.currentTarget) return
    store.anim.split.restart()
    // store.play(store.curWord.audio)
  }

  const handlePointerUp = (e) => {
    e.preventDefault()
    if(e.target !== e.currentTarget) return
    store.anim.split.reverse()
  }

  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });

  return {
    handlePointerDown,
    handlePointerUp,
  }
}
