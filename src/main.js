import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { getCategory } from '@/apis/testApi.js'

getCategory().then(res=>{
    console.log(res)
})
const app= createApp(App)
const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.mount('#app')
