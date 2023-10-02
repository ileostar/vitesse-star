import { createRouter, createWebHistory } from 'vue-router/auto'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './styles/style.css'
import App from './App.vue'
import 'virtual:uno.css'

const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(pinia)
app.mount('#app')
