import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@iconscout/unicons/css/line.css'
import 'bootstrap/scss/bootstrap.scss'
import 'bulma/css/bulma.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
