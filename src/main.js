/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// 立刻執行function =>(寫一個function)()=>用小括號使用
(async () => {
  const app = createApp(App)
  await registerPlugins(app)
  app.mount('#app')
})()
