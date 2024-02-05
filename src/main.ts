import { createApp } from 'vue'

import '@/assets/styles/index.scss'
import router from '@/router'
import { pinia } from '@/plugins/pinia'

import App from '@/App.vue'

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
