import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import { plugin, defaultConfig } from '@formkit/vue'


import App from './App.vue'
import router from './router'
import './input.css'
createApp(App).use(plugin, defaultConfig).mount('#app')
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
