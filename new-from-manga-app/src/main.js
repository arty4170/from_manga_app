import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Cover from '@/components/ui/Cover'
import Description from '@/components/ui/Description'
import MyInput from '@/components/ui/MyInput'
import MySelect from '@/components/ui/MySelect'
import Title from '@/components/ui/Title'
import store from '@/store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import MyTextArea from '@/components/ui/MyTextArea'
import MyRadio from '@/components/ui/MyRadio'

const app = createApp(App)
	.use(Quasar, quasarUserOptions)
	.use(router)
	.use(store)
app.component('cover', Cover)
app.component('description', Description)
app.component('my-input', MyInput)
app.component('my-select', MySelect)
app.component('manga-title', Title)
app.component('my-textarea', MyTextArea)
app.component('my-radio', MyRadio)
app.mount('#app')
