const audio = new Audio()

let isPlaying = false
let playMode = 'single' // single, serial
let serialAudioList: string[] = []
let serialIndex = 0

audio.oncanplay = () => {
  isPlaying = true
  audio.play()
}

audio.onended = () => {
  // 播放结束后的逻辑
  if(playMode === 'serial') {
    serialIndex++
    if(serialIndex < serialAudioList.length) {
      audio.src = serialAudioList[serialIndex]
    } else {
      serialIndex = 0
      isPlaying = false
    }
  }
  else {
    isPlaying = false
  }
}

const playSingleAudio = (src:string) => {

  playMode = 'single'
  audio.src = src
  audio.load()
}

const playSerialAudio = (list: string[]) => {

  playMode = 'serial'
  serialAudioList = list
  serialIndex = 0
  audio.src = list[0]
  audio.load()
}

export { isPlaying, playSingleAudio, playSerialAudio }
