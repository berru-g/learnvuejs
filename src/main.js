import { createApp } from 'vue'
import App from './App.vue'
//import Vue from Vue
import ColorPipetteTool from './components/ColorPipetteTool.vue'

const app = createApp(App)
app.component('ColorPipetteTool', ColorPipetteTool)
app.mount('#app')
