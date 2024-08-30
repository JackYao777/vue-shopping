import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { lazyPlugin } from './directives'
import { componentPlugin } from '@/components/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { getCategory } from '@/apis/testApi.js'
//引入初始化样式文件
import '@/styles/common.scss'

// getCategory().then(res=>{
//     console.log(res)
// })
const app= createApp(App)
const pinia = createPinia()
 pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
