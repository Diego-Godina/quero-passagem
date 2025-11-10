import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@iconscout/unicons/css/line.css'
import 'bootstrap/scss/bootstrap.scss'
import 'bulma/css/bulma.min.css'
import {key, store} from "@/stores";

const app = createApp(App)

app.use(router)
app.use(store, key)

app.mount('#app')
