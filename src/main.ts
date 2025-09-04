import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css'
import './styles/index.css'

import App from './App.vue'
import router from './router'

import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
