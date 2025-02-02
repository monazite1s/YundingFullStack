// import { createApp } from 'vue/dist/vue.esm-bundler'
//在没有.vue文件时使用此包能对组件中的template进行解析
import { createApp } from 'vue'
import  router  from './router'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')