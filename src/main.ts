import { createRouter, createWebHistory } from 'vue-router/auto'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import OnuUI from 'onu-ui'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'onu-ui/dist/style.css'
import 'uno.css'

const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(pinia)
app.use(OnuUI)
app.mount('#app')
