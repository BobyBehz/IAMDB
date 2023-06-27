import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use((context) => {
    const storeId = context.store.$id 

    const fromStorage = JSON.parse(window.localStorage.getItem(storeId))

    if (fromStorage) {
        context.store.$patch(fromStorage)
    }

    context.store.$subscribe((mutation, state) => {
        window.localStorage.setItem(storeId, JSON.stringify(state))
    })


})

app.use(pinia)
app.use(router)

app.mount('#app')
