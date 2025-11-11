import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@iconscout/unicons/css/line.css'
import 'bootstrap/scss/bootstrap.scss'
import 'bulma/css/bulma.min.css'
import {key, store} from "@/stores";
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(App)

app.use(router)
app.use(store, key)
app.use(VCalendar, {})

app.mount('#app')
