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
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAsqXQl31pyLj3-CYYDksVVRTx9TOp4KBI",
  authDomain: "from-manga-app.firebaseapp.com",
  projectId: "from-manga-app",
  storageBucket: "from-manga-app.appspot.com",
  messagingSenderId: "912326591500",
  appId: "1:912326591500:web:e485a577d7847748749a29"
}
initializeApp(firebaseConfig)

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

const auth = getAuth()
onAuthStateChanged(auth, (user) => {
  console.log(user)
  store.dispatch('users/setUser', user)
})

app.mount('#app')
