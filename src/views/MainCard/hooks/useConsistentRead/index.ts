import audioSrc from '@/assets/audios/banana-1.mp3'
import audioSrc_2 from '@/assets/audios/banana-2.mp3'
import audio_zh from '@/assets/audios/香蕉.mp3'
import { useMainCardStore } from '@/stores/mainCard'

const store = useMainCardStore()
const list = [
  audio_zh,
  audioSrc,
  audioSrc,
  audio_zh,
  audioSrc,
  audioSrc,
  audioSrc,
]
let count = 0
let isPlaying = false


export const useConsistentRead = () => {

}
