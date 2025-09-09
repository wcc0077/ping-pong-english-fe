import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css'
import './styles/index.css'

import App from './App.vue'
import router from './router'

import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(SplitText)
gsap.registerPlugin(Flip)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
