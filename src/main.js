import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$pipette = null

app.mount('#app')

app.provide('eventBus', new Vue())

app.mixin({
  methods: {
    createPipette() {
      // code pour créer une pipette
      const pipette = document.createElement('div')
      //...
      this.$refs.image.addEventListener('mousemove', this.handleMouseMove)
      this.$refs.image.addEventListener('click', this.handleClick)
      //...
    },
    handleMouseMove(event) {
      const pipette = document.querySelector('.pipette')
      pipette.style.top = `${event.clientY}px`
      pipette.style.left = `${event.clientX}px`
    },
    handleClick(event) {
      const pipette = document.querySelector('.pipette')
      const context = event.target.getContext('2d')
      const colorData = context.getImageData(event.offsetX, event.offsetY, 1, 1).data
      const hexColor = this.rgbToHex(colorData[0], colorData[1], colorData[2])
      console.log(hexColor)
    },
    rgbToHex(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
  }
})
