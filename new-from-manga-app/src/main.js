import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Cover from '@/components/ui/Cover'
import Description from '@/components/ui/Description'
import MyInput from '@/components/ui/MyInput'
import MySelect from '@/components/ui/MySelect'
import Title from '@/components/ui/Title'
import store from '@/store'

const app = createApp(App).use(router).use(store)
app.component('cover', Cover)
app.component('description', Description)
app.component('my-input', MyInput)
app.component('my-select', MySelect)
app.component('manga-title', Title)
app.mount('#app')
